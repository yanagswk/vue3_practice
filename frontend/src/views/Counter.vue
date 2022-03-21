<script setup lang="ts">
import { ref } from "vue";

const counter = ref<number>(0);

const increment = () => {
  return counter.value++;
};

const decrement = () => {
  return counter.value--;
};
</script>

<template>
  <div>
    <div class="bg-gray-300 h64 w-4/6 mx-auto shadow-md flex flex-col justify-center items-center mt-2">
      <h3 class="text-3xl mt-10 font-semibold">COUNTER APP!! 🔥</h3>
      <div>
        <button
          class="bg-red-500 text-blue-900 border rounded-lg px-8 m-4 h-10 text-2xl fornt-bold focus:outline-none"
          @click="increment()"
        >
          タップで増加(メソッド)
        </button>
        <button
          class="bg-red-500 text-blue-900 border rounded-lg px-8 m-4 h-10 text-2xl fornt-bold focus:outline-none"
          @click="decrement()"
        >
          タップで減少(メソッド)
        </button>
      </div>
      <h5 class="text-3l">カウンター数: {{ counter }}</h5>
    </div>
  </div>
</template>
