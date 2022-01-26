<template>
  <button
    :class="{
      'h-btn': true,
      [typeClass]: typeClass,
      'h-btn-circle': props.circle,
    }"
    @click="emits('click')"
  >
    <i v-if="props.circle" :class="['hicon', props.icon]"></i>
    <span class="h-btn-text" v-else>
      <i v-if="props.icon" :class="['hicon', props.icon]"></i>
      <slot></slot>
    </span>
  </button>
</template>

<script lang="ts" setup>
import { typeDict } from "./button.type";
import { reactive, toRefs, ref, computed } from "vue";

const emits = defineEmits(["click"]);

const props = defineProps({
  circle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
  },
  type: {
    type: String,
    default: "default",
    validator(v: string) {
      return Object.keys(typeDict).includes(v);
    },
  },
});

const typeClass = computed(() => typeDict[props.type]);
</script>

<style lang="scss" scoped>
@import "@/style/variable";
@each $key, $var in $colors {
  .h-btn-#{$key} {
    min-width: 2rem;
    background-color: map-get($map: $var, $key: "base");
    color: var(--hy-comp-btn-default);
    &:hover {
        background-color: map-get($map: $var, $key: 'hover');
    }
  }
}
.h-btn-circle {
  padding: 0 !important;
  min-width: 0.875rem !important;
  border-radius: 50% !important;
}
.h-btn {
  cursor: pointer;
  padding: 0 0.625rem;
  height: 0.875rem;
  line-height: 1.5;
  font-size: var(--hy-comp-btn-fz);
  border-radius: 0.0625rem;
  border-width: 0.0313rem;
  border-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  .h-btn-text {
    display: flex;
    justify-content: center;
    align-items: center;
    i {
      margin: 0.1875rem;
    }
  }
}
</style>
