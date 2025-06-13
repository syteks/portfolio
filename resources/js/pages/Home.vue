<script setup>
  import Skills from '@/pages/Skills.vue';
  import BaseLayout from '@/layouts/BaseLayout.vue';
  import Experience from '@/pages/Experience.vue';
  import About from '@/pages/About.vue';
  import Projects from '@/pages/Projects.vue';

</script>

<template>
  <BaseLayout>
    <template #main>
      <div class="relative">
        <About></About>
        <Skills></Skills>
        <Experience></Experience>
        <Projects></Projects>
      </div>
    </template>
  </BaseLayout>
</template>
