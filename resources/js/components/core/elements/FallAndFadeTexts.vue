<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  texts: {
    type: Array,
    default: () => [],
  },
  configuration: {
    type: Object,
    default: () => {
      return {
        textInterval: 4,
      };
    },
  },
});

const quoteInterval = props.configuration.textInterval;

// Automatically calculate the total animation duration based on the number of quotes
const animationDuration = computed(() => `${props.texts.length * quoteInterval}s`);
</script>

<template>
  <div class="relative mt-4 h-12 w-full overflow-hidden">
      <span
        v-for="(quote, index) in texts"
        :key="index"
        class="absolute mt-2 text-lg text-blue-400 dark:text-blue-400 inset-0 flex items-center justify-center md:text-2xl italic font-light opacity-0 animate-fall-and-fade "
        :style="{
          animationDuration: animationDuration,
          animationDelay: `${index * quoteInterval}s`
        }"
      >
        {{ quote }}
      </span>
  </div>
</template>
