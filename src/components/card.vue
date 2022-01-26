<template>
  <div class="show-box bd-a">
    <div class="box-nav bd-b">
      <div class="ctrl-bar">
        <div @click="copyHandler" class="bar-item fz-s ml-xs mr-xs">
            <i class="hicon hi-copy"></i>
        </div>
        <div @click="isShowDetail = !isShowDetail" class="bar-item fz-s ml-xs mr-xs">
            <i class="hicon hi-expand"></i>
        </div>
      </div>
    </div>
    <div class="box-container" v-show="isShowDetail" >
        <slot></slot>
        <slot name="code"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
const isShowDetail = ref(false);
const emits = defineEmits(['copy', 'expand'])
const copyHandler = () => {
    emits('copy');
}
</script>

<style lang="scss" scoped>
@import '@/style/variable';
.show-box {
  width: 26.875rem;
  border-radius: .1875rem;
  box-shadow: 0 0 6px 6px map-get($map: map-get($map: $colors, $key: 'border'), $key: 'base');
  .box-nav {
    height: 1.5rem;
    display: flex;
    align-items: center;
    padding: 0 .25rem;
    justify-content: flex-end;
    .ctrl-bar {
     display: flex;
     align-items: center;
      .bar-item {
        width: .625rem;
        height: .625rem;
        &:hover {
            color: map-get($map:map-get($map: $colors, $key: 'primary'), $key: 'base');
        }
      }
    }
  }
  .box-container {
  }
}
</style>
