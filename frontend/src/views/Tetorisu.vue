<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const state = ref({
  name: "",
});

const router = useRouter();

const startGame = () => {
  alert(`ユーザー名: ${state.value.name}`);
  router.push({
    name: "PlayPage",
    query: { name: state.value.name },
  });
};
</script>

<template>
  <h1>トップ画面</h1>
  <p>{{ state.name }}</p>
  <input type="text" v-model="state.name" placeholder="名前を入力してください" maxlength="10" />
  <br />
  <br />
  <button @click="startGame()">ゲームスタート</button>
</template>

<style scoped>
input {
  width: 18em;
  font-size: 1.1em;
  text-align: center;
}

p {
  font-size: 1.6em;
  font-weight: bold;
  height: 5vh;
}
</style>
