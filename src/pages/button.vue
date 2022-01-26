<template>
  <div class="container">
    <div class="show-btn-item">
      <h-button type="primary" @click="btnClickHandler">Default</h-button>
      <h-button type="success">success</h-button>
      <h-button type="warning">warning</h-button>
      <h-button type="danger">danger</h-button>
      <h-button type="error">error</h-button>
      <h-button type="info">info</h-button>
      <h-button type="primary" circle icon="hi-check"></h-button>
      <h-button type="success" circle icon="hi-email"></h-button>
      <h-button type="warning" circle icon="hi-search">warning</h-button>
      <h-button type="danger" circle icon="hi-error">danger</h-button>
      <h-button type="error" circle icon="hi-edit">error</h-button>
      <h-button type="info" circle icon="hi-delete">info</h-button>
    </div>

    <div class="show-btn-item">
      <h-button type="primary" icon="hi-check">check</h-button>
      <h-button type="success" icon="hi-email">email</h-button>
      <h-button type="warning" icon="hi-search">search</h-button>
      <h-button type="danger" icon="hi-error">error</h-button>
      <h-button type="error" icon="hi-edit">edit</h-button>
      <h-button type="info" icon="hi-delete">delete</h-button>
    </div>
    <s-card @copy="copyhandler">
      <pre><code>
            let i = 0
        </code></pre>
    </s-card>
  </div>
</template>

<script lang="ts" setup>
import HButton from "@/components/button/button.vue";
import { reactive, toRefs } from "vue";

const btnClickHandler = () => {
  console.log("btn click");
};

const copyhandler = () => {
  console.log("copy");
};
</script>

<style lang="scss" scoped>
.show-btn-item {
  margin: 0.625rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
