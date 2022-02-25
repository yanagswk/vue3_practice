<template>
  <div class="px-1">
    <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
      <div class="px-6 py-4">{{ title }}</div>
      <div class="font-bold text-s mb-1">{{ counter }}</div>
      <p class="text-gray-700 text-base">{{ description }}</p>
    </div>
    <img class="w-full" :src="img_url" alt="sample images" />
    <div class="px-6 py-4">
      タグ数 {{ tag_count }} 個
      <span
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        v-for="(tag, index) of tags"
        :key="index"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, computed } from "vue";

export default defineComponent({
  props: {
    id: Number as PropType<number>,
    title: String as PropType<string>,
    tags: Array as PropType<string[]>,
    img_url: String as PropType<string>,
    description: String as PropType<string>,
  },
  setup(props) {
    const counter = ref<number>(0);

    const tag_count = computed((): number => {
      if (props.tags) {
        return props.tags.length;
      } else {
        return 0;
      }
    });

    return {
      counter,
      tag_count,
    };
  },
});
</script>
