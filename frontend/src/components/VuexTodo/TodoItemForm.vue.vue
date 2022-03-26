<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "@/store/index";
import * as MutationTypes from "@/store/mutationType";

const form = ref({
  title: "",
  content: "",
});

const clearForm = () => {
  form.value.title = "";
  form.value.content = "";
};

const store = useStore();

const onSubmit = () => {
  store.commit(MutationTypes.ADD_TODO_ITEM, {
    id: Math.floor(Math.random() * 100000),
    content: form.value.content,
    title: form.value.title,
  });
  clearForm();
};
</script>

<template>
  <form>
    <label for="title">
      title
      <input type="text" id="title" v-model="form.title" />
    </label>
    <label for="content">
      content
      <input type="text" id="content" v-model="form.content" />
    </label>
    <input type="submit" value="submit" @click.prevent="onSubmit" />
  </form>
</template>
