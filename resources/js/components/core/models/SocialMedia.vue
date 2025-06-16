<script setup>
  import LinkedIn from '@components/core/svgs/LinkedIn.vue'
  import ButtonLink from '@components/core/links/ButtonLink.vue'
  import Instagram from '@components/core/svgs/Instagram.vue'
  import GitHub from '@components/core/svgs/GitHub.vue'
</script>

<template>
    <ButtonLink
      href="https://www.instagram.com/sergiuthefirst"
      class="flex items-center hover:bg-none"
    >
      <Instagram/>
    </ButtonLink>
    <ButtonLink
      href="https://www.linkedin.com/in/sergiu-turcanu-169b81190/"
      class="flex items-center hover:bg-none"
    >
      <LinkedIn/>
    </ButtonLink>
    <ButtonLink
      href="https://github.com/syteks"
      class="flex items-center hover:bg-none"
    >
      <GitHub/>
    </ButtonLink>
</template>


