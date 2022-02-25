<template>
  <div class="mt-10">
    <Counter />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Counter from "@/components/counter/Counter.vue";

export default defineComponent({
  name: "Home",
  components: {
    Counter,
  },
  // setup() {
  //   const counter = ref()
  // }
});
</script>
