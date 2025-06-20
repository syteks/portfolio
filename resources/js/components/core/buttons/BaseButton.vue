<script setup>

const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  customClasses: {
    type: String,
    default: null,
  },
});

const defaultClasses = 'p-2 text-white bg-gray-500 rounded';

</script>

<template>
  <button
    :type="props.type"
    :class="props.customClasses ?? defaultClasses"
  >
    <slot></slot>
  </button>
</template>
