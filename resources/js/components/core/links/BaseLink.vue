<script setup>
import { getDefaultProps } from '@composables/core/links/useLinks.js';

const props = defineProps(getDefaultProps());
</script>

<template>
  <a
    :href="props.href"
    :target="props.target"
  >
    <slot></slot>
  </a>
</template>
