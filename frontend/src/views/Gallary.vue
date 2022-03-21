<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import GalleryCard from "@/components/gallary/GalleryCard.vue";
import { Gallery } from "@/models/Gallery";
import axios from "@/axios";

const apiGallery = ref<Gallery[]>();

const getGalleryList = async () => {
  const res = await axios.get("api/gallery_list");
  return res.data;
};

/**
 * マウント
 */
onMounted(async () => {
  const galleryList = await getGalleryList();
  apiGallery.value = galleryList;
});
</script>

<template>
  <div class="w-2/3 h-screen mx-auto flex items-center">
    <div v-for="(gallery, index) in apiGallery" :key="index">
      <div v-if="gallery.release">
        <GalleryCard
          :id="gallery.id"
          :title="gallery.title"
          :tags="gallery.tags"
          :img_url="gallery.img_url"
          :description="gallery.description"
        />
      </div>
    </div>
  </div>
</template>
