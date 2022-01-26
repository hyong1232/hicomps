<template>
  <div class="h-drawer" v-if="props.modelValue">
    <div class="h-container">
      <div class="h-drawer-header" v-if="props.title">
        {{ props?.title }}
      </div>
      <div class="h-drawer-content">
        <slot></slot>
      </div>
      <div class="h-drawer-footer">
        <button @click="emits('update:modelValue')">close drawer</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, toRefs } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  modelValue: {
    type: Boolean,
    required: true,
  },
});
const emits = defineEmits(["update:modelValue", "check"]);
</script>

<style lang="scss" scoped>
.h-drawer {
  background-color: var(--hy-cover-color);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  .h-container {
    width: 30%;
    height: 100%;
    background-color: var(--hy-comp-white);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .h-drawer-header {
      height: 2.5rem;
    }
    .h-drawer-content {
      flex: 1;
    }
    .h-drawer-footer {
      height: 2.5rem;
    }
  }
}
</style>
