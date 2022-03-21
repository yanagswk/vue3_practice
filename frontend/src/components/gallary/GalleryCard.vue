<script setup lang="ts">
import { ref, defineProps, computed } from "vue";
// import { Gallery } from "@/models/Gallery";

const props = defineProps<{
  id: number;
  title: string;
  tags: string[];
  img_url: string;
  description: string;
}>();

const tag_count = computed((): number => {
  if (props.tags) {
    return props.tags.length;
  }
  return 0;
});
</script>

<template>
  <div class="px-1">
    <div class="max-w-sm bg-white rounded-lg overflow-hidden shadow-lg">
      <div class="px-6 py-4">{{ title }}</div>
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
