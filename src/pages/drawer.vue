<template>
  <div class="container">
      <button @click="isOpenDrawer = true">show drawer</button>
      <h-drawer v-model="isOpenDrawer" title="this is a drawer">
        custom drawer content...
      </h-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HDrawer from "@/components/drawer/drawer.vue";
const isOpenDrawer = ref(false);
</script>

<style lang="less" scoped>
</style>
