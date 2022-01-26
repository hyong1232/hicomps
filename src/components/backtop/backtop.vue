<template>
  <div class="back-top" @click="goTop" :style="{right: setRight, bottom: setBottom}" v-show="isShowIcon">
    <div class="icon">
      <slot>up</slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { animationFrameCtrl } from "@/hooks/annimationFrameCtrl";
import { $destoryOn, $on } from "@/hooks/domEvent";
import { throttle } from "@/hooks/throttle";
import { onMounted, reactive, toRefs, ref, onUnmounted, computed } from "vue";
const isShowIcon = ref(false);
const props = defineProps({
  target: {
    type: String,
    default: "none",
  },
  visibilityHeight: {
    type: Number,
    default: 200,
  },
  bottom: {
    type: Number,
    default: 60,
  },
  right: {
    type: Number,
    default: 60,
  },
});

const setBottom = computed(() => props.bottom + 'px');
const setRight = computed(() => props.right + 'px');

let beginScrollTop = 0;
const target = document.querySelector(props.target) || document.documentElement;
const container = document.querySelector(props.target) || document;

const easeQutQuint = (p: number) => {
  return 1 - Math.pow(1 - p, 5);
};

const goTop = () => {
  const startTime = Date.now();
  const rAF = window.requestAnimationFrame || ((fn) => setTimeout(fn, 16));
  function executor() {
    const process = (Date.now() - startTime) / 500;
    if (process > 1) {
      target.scrollTop = 0;
      return;
    }
    rAF(executor);
    target.scrollTop = (1 - easeQutQuint(process)) * beginScrollTop;
  }
  executor();
};

const scrollHander = throttle(300, (...args: any[]) => {
  isShowIcon.value = target.scrollTop > props.visibilityHeight;
  beginScrollTop = target.scrollTop;
});

onMounted(() => {
  $on('scroll', container, scrollHander)
});
onUnmounted(() => {
  $destoryOn("scroll", container,scrollHander);
});
</script>

<style lang="scss" scoped>
@import "@/style/variable";
.back-top {
  cursor: pointer;
  border-radius: 0.25rem;
  text-align: center;
  line-height: 1.25rem;
  font-size: 0.625rem;
  color: map-get($map: map-get($map: $colors, $key: "primary"), $key: "base");
  position: fixed;
  box-shadow: 0 0 0.1875rem #0000001f;
  width: 1.25rem;
  height: 1.25rem;
}
</style>
