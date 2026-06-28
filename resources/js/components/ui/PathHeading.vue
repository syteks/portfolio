<script setup>
/**
 * A small uppercase "shell path" sub-heading, e.g. `~/education`. The label is
 * provided via the default slot; margins/spacing are passed by the caller and
 * merge onto the root through Vue's attribute fall-through.
 */
</script>

<template>
  <h3 class="font-mono text-sm font-semibold uppercase tracking-wider text-[#565f89]">
    <span class="text-[#7dcfff]">~/</span><slot />
  </h3>
</template>
