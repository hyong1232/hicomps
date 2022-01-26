<template>
  <div class="doc-box">
    <div class="sub-menu bd-r">
      <ul class="menu-item-group">
        <li
          v-for="(item, i) in subMenuList"
          @click="
            activeItem = i;
            $router.push(item.path);
          "
          :key="i"
          :class="['menu-item', 'fz-m', activeItem === i ? 'menu-active' : '']"
        >
          <div>{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <div class="content-container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";

const activeItem = ref(1);

const subMenuList = reactive([
  { name: "button", icon: "", path: "/button" },
  { name: "backtop", icon: "", path: "/backtop" },
  { name: "popover", icon: "", path: "/popover" },
  { name: "drawer", icon: "", path: "/drawer" },
  { name: "tips", icon: "", path: "/tips" },
  { name: "perviewPicture", icon: "", path: "/previewPicture" },
]);
</script>

<style lang="scss" scoped>
@import "@/style/_variable.scss";
$active-color: map-get(
  $map:
    map-get(
      $map: $colors,
      $key: "primary",
    ),
  $key: "base",
);
.menu-active {
  color: $active-color;
}
.doc-box {
  height: calc(100% - 2.0625rem);
  display: flex;
  .sub-menu {
    width: 6.25rem;
    .menu-item-group {
      padding: 0;
      .menu-item {
        display: flex;
        align-items: center;
        cursor: pointer;
        margin: 0.3125rem 0;
        padding-left: 0.625rem;
        height: 1.25rem;
        list-style: none;
        &:hover {
          background-color: $active-color;
          color: white;
        }
        p {
          margin: 0;
        }
      }
    }
  }
  .content-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
