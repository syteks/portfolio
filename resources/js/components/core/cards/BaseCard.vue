<script setup>
  const props = defineProps({
    classes: {
      type: String,
      default: ""
    }
  });

  const defaultClasses = "border rounded-lg shadow bg-gray-800 border-gray-700 max-w-sm w-[25%] h-fit mx-8";
</script>

<template>
  <div
    :class="props.classes ? props.classes : defaultClasses"
  >
    <slot></slot>
  </div>
</template>
