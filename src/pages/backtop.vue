<template>
  <div class="backtop-show">
    <button @click="bt = 80" >change bottom</button>
    <Back-top :bottom="bt"></Back-top>
  </div>
</template>

<script setup lang="ts">
import BackTop from "@/components/backtop/backtop.vue";
import { ref } from "vue"
const bt = ref(60);
</script>

<style lang="scss" scoped>
.backtop-show {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    width: 100%;
    height: 400%;
}
</style>
