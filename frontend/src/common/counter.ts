import { ref } from "vue";

export const useCounter = () => {
  const counter = ref<number>(0);

  const increment = (): number => {
    return counter.value++;
  };

  const decrement = (): number => {
    return counter.value--;
  };

  return {
    counter,
    increment,
    decrement,
  };
};
