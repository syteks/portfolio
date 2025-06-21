<script setup>
import LinkedIn from '@components/core/svgs/LinkedIn.vue';
import ButtonLink from '@components/core/links/ButtonLink.vue';
import Instagram from '@components/core/svgs/Instagram.vue';
import GitHub from '@components/core/svgs/GitHub.vue';

const props = defineProps({
  width: {
    type: Number,
    default: 24,
  },
  height: {
    type: Number,
    default: 24,
  },
});
</script>

<template>
  <ButtonLink
    href="https://www.instagram.com/sergiuthefirst"
    class="flex items-center hover:bg-none"
  >
    <Instagram
      :width="`${props.width}px`"
      :height="`${props.height}px`"
    />
  </ButtonLink>
  <ButtonLink
    href="https://www.linkedin.com/in/sergiu-turcanu-169b81190/"
    class="flex items-center hover:bg-none"
  >
    <LinkedIn
      :width="`${props.width}px`"
      :height="`${props.height}px`"
    />
  </ButtonLink>
  <ButtonLink
    href="https://github.com/syteks"
    class="flex items-center hover:bg-none"
  >
    <GitHub
      :width="`${props.width - 4}px`"
      :height="`${props.height - 4}px`"
    />
  </ButtonLink>
</template>


