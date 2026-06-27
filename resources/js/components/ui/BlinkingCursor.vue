<script setup>
/**
 * Terminal-style blinking block cursor. Inherits color via `currentColor`
 * so it picks up the surrounding text color; pause respects reduced motion.
 */
</script>

<template>
  <span
    class="ml-1 inline-block h-[1.05em] w-[0.55ch] translate-y-[0.12em] bg-current align-baseline animate-blink motion-reduce:animate-none"
    aria-hidden="true"
  />
</template>
