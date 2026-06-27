<script setup>
import { defineAsyncComponent } from 'vue';
import EditorLayout from '@/layouts/EditorLayout.vue';
import Hero from '@/sections/Hero.vue';

// Below-the-fold buffers are code-split so the icon-heavy chunks load lazily.
const About = defineAsyncComponent(() => import('@/sections/About.vue'));
const Skills = defineAsyncComponent(() => import('@/sections/Skills.vue'));
const Experience = defineAsyncComponent(() => import('@/sections/Experience.vue'));
const Details = defineAsyncComponent(() => import('@/sections/Details.vue'));
const Contact = defineAsyncComponent(() => import('@/sections/Contact.vue'));
</script>

<template>
  <EditorLayout>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Details />
    <Contact />
  </EditorLayout>
</template>
