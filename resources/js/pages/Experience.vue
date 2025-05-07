<script setup>
  import Folder from '@components/core/elements/Folder.vue';
  import { ref } from 'vue';

  const experiences = [
    {
      title: "Aylo",
    },
    {
      title: "Tollé"
    },
    {
      title: "Spordle"
    },
    {
      title: "Polygon"
    }
  ];

  const clickedFolderTitle = ref("Aylo")

  /**
   *
   * @param {string} title
   */
  const setActiveFolder = (title) => {
    if (clickedFolderTitle.value === title) {
      clickedFolderTitle.value = '';
      return;
    }

    clickedFolderTitle.value = title;
  }
</script>

<template>
  <section id="experience_page">
    <div
      class="pt-24 sticky top-0 h-screen bg-gradient-to-b from-gray-800 to-gray-600 text-white"
    >
        <div
          class="flex justify-center"
        >
            <Folder
              v-for="experience in experiences"
              :folder="experience"
              :isActive="clickedFolderTitle === experience.title"
              @folder-clicked="setActiveFolder"
            >
            </Folder>
        </div>
      </div>
  </section>
</template>
