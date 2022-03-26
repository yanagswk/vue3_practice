<script setup lang="ts">
import AppNavi, { MenuItem } from "@/components/TodoList/AppNavi.vue";

// メニュー設定
const menuItems: MenuItem[] = [
  {
    type: "heading",
    title: "Main",
  },
  {
    type: "menu",
    title: "ToDo",
    icon: "fa-list",
    url: "/todo",
  },
  {
    type: "menu",
    title: "CounterApp",
    url: "/counter",
  },
  {
    type: "menu",
    title: "Gallary",
    url: "/gallary",
  },
  {
    type: "menu",
    title: "Tetorisu",
    url: "/Tetorisu",
  },
  {
    type: "menu",
    title: "vuexTodo",
    url: "/vuextodolist",
  },
];
</script>

<template>
  <AppNavi title="Todo App" :menu-items="menuItems"></AppNavi>
</template>
