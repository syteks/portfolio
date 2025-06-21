<script setup>
const props = defineProps({
  title: {
    type: String,
    default: null,
  },
  classes: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: null,
  },
});
</script>

<template>
  <a
    v-if="props.link"
    :href="props.link"
    target="_blank"
    class="h2 text-4xl font-bold text-white-800 hover:text-green-500 hover:underline transition-colors duration-200 cursor-pointer"
  >
    {{ props.title }}
  </a>
  <h2
    v-else
    class="text-4xl font-bold text-white-800"
    :class="props.classes"
  >

    {{ props.title }}
  </h2>
</template>
