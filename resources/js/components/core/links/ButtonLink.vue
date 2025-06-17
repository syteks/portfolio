<script setup>
  import BaseLink from '@components/core/links/BaseLink.vue';
  import { getDefaultProps } from '@composables/core/links/useLinks.js'

  const props = defineProps(getDefaultProps());
</script>

<template>
  <BaseLink
    :href="props.href"
    :target="props.target"
    class="rounded-md text-base font-medium text-gray-300 hover:text-yellow-400"
  >
    <slot></slot>
  </BaseLink>
</template>
