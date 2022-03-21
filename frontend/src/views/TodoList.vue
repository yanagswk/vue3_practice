<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
import { Task } from "@/models/Task";
import TaskList from "@/components/TodoList/TaskList.vue";
import TaskAdd from "@/components/TodoList/TaskAdd.vue";
import axios from "@/axios";

const apiTask = ref<Task[]>();

/**
 * タスクの追加
 */
const addTask = (newTaskTitle: string) => {
  let newTask: Task = {
    id: Date.now(),
    title: newTaskTitle,
    done: false,
  };
  apiTask.value?.push(newTask);
};

/**
 * タスク更新
 */
const doneTask = (id: number) => {
  let task = apiTask.value?.find((t) => t.id === id);
  if (task !== undefined) {
    task.done = !task.done;
  }
};

/**
 * タスク削除
 */
const deleteTask = (id: number) => {
  apiTask.value?.forEach((task, index) => {
    if (task.id == id) apiTask.value?.splice(index, 1);
  });
};

/**
 * TodoList取得
 */
const getTodoList: () => Promise<Task[]> = async () => {
  const res = await axios.get("api/todo_list");
  return res.data;
};
// const getTodoList = () => {
//   return axios.get("api/todo_list");
// };

/**
 * マウント
 */
onMounted(async () => {
  const todoList = await getTodoList();
  apiTask.value = todoList;
});
</script>

<template>
  <h1 class="mt-4">Todo List</h1>
  <div class="row">
    <div class="col-xl-6 col-md-6">
      <TaskAdd @add="(newTaskTitle) => addTask(newTaskTitle)"></TaskAdd>
      <TaskList :tasks="apiTask" @delete="(id) => deleteTask(id)" @done="(id) => doneTask(id)"></TaskList>
    </div>
  </div>
</template>
