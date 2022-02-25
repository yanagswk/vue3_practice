<template>
  <div>
    <div>カウンター</div>
    <div class="bg-gray-300 h64 w-4/6 mx-auto shadow-md flex flex-col justify-center items-center">
      <h3 class="text-3xl mt-10 font-semibold">COUNTER APP!! 🔥</h3>
      <div>
        <button
          class="bg-red-500 text-blue-900 border rounded-lg px-8 m-4 h-10 text-2xl fornt-bold focus:outline-none"
          @click="increment(counter)"
        >
          タップで増加(メソッド)
        </button>
        <button
          class="bg-red-500 text-blue-900 border rounded-lg px-8 m-4 h-10 text-2xl fornt-bold focus:outline-none"
          @click="decrement(counter)"
        >
          タップで減少(メソッド)
        </button>
      </div>
      <h5 class="text-3l">カウンター数: {{ counter }}</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { useCounter } from "@/common/counter";

export default defineComponent({
  setup(props) {
    // const counter = ref<number>(0);

    // const increment = (): number => {
    //   return counter.value++;
    // };

    // const decrement = (): number => {
    //   return counter.value--;
    // };

    const { counter, increment, decrement } = useCounter();

    return {
      counter,
      increment,
      decrement,
    };
  },
});
</script>
