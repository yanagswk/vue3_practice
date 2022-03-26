<script setup lang="ts">
import { reactive, onMounted, ref, computed } from "vue";
import { useStore } from "@/store/index";
import TodoItemForm from "@/components/VuexTodo/TodoItemForm.vue.vue";
import * as ActionTypes from "@/store/actinonTypes";

// ストア本体
const store = useStore();

// const todoItems = computed(() => store.state.todoItems);

onMounted(async () => {
  await store.dispatch(ActionTypes.INITIALIZE_TODO_ITEMS);
});
</script>

<template>
  <div>
    <!-- <div v-for="item in todoItems" :key="item.id"> -->
    <div v-for="item in store.state.todoItems" :key="item.id">
      <p>{{ item.title }}</p>
      <p>{{ item.content }}</p>
      <p>{{ item.completed ? "✅" : "-" }}</p>
      <hr />
    </div>
    <TodoItemForm></TodoItemForm>
  </div>
</template>
