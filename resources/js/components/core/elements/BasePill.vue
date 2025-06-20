<script setup>
const props = defineProps({
  color: {
    type: String,
    default: 'bg-green-800',
  },
  textColor: {
    type: String,
    default: 'text-white',
  },
});

</script>

<template>
  <span
    :class="`text-s font-medium me-2 px-2.5 py-0.5 rounded-full ${props.color} ${props.textColor}`"
  >
    <slot></slot>
  </span>
</template>
