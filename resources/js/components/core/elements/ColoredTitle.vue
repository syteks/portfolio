<script setup>
  const props = defineProps({
    title: {
      type: String,
      default: null
    },
    enableGlow: {
      type: Boolean,
      default: false
    },
  });

  /**
   * It will check if the glow animation class needs to be appended if yes, it appends to the default class and outputs it.
   * @return {string}
   */
  const getClasses = () => {
    const defaultClasses = 'font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400';

    if (props.enableGlow) {
      return `${defaultClasses} animate-glow-pulse motion-reduce:animate-none`;
    }

    return defaultClasses;
  }
</script>

<template>
  <h1 :class="getClasses()">
    {{ props.title }}
  </h1>
</template>
