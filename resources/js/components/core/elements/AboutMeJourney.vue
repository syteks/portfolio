<script setup>
const props = defineProps({
  icon: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  animationDelay: {
    type: String,
    default: '0.5s',
  },
  startAnimation: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="flex flex-col md:flex-row items-center gap-8 p-4 rounded-lg transition-all duration-300 text-gray-100 hover:text-yellow-400 dark:text-white hover:bg-gray-500/20 hover:shadow-lg transform hover:-translate-y-1"
    :class="{ 'animate-about-me-page-fade-in': startAnimation, 'opacity-0': !startAnimation }"
    :style="`animation-delay: ${animationDelay};`"
  >
    <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white shadow-lg flex-shrink-0">
      <component :is="props.icon"/>
    </div>
    <div>
      <h3 class="text-2xl font-bold mb-2">{{ props.title }}</h3>
      <p class="text-gray-300 dark:text-gray-300 text-base">
        {{ props.description }}
      </p>
    </div>
  </div>
</template>

