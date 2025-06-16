<script setup>
  import ButtonLink from '@components/core/links/ButtonLink.vue';
  import SocialMedia from '@components/core/models/SocialMedia.vue';
</script>

<template>
  <nav class="">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex flex-row h-16 items-center justify-center lg:justify-around">
        <!-- Filler div we can add a button, but for now I keep it empty-->
        <div class="sm:block"></div>
        <div class="sm:block">
          <div class="flex space-x-2">
            <ButtonLink
              class="px-3 py-2 text-sm"
              rel="noopener"
              target="_self"
              aria-current="page"
              href="#home_page"
            >
              Home
            </ButtonLink>
            <ButtonLink
              class="px-3 py-2 text-sm"
              rel="noopener"
              target="_self"
              aria-current="page"
              href="#skills_page"
            >
              Skills
            </ButtonLink>
            <ButtonLink
              class="px-3 py-2 text-sm"
              rel="noopener"
              target="_self"
              aria-current="page"
              href="#experience_page"
            >
              Experience
            </ButtonLink>
            <ButtonLink
              class="px-3 py-2 text-sm"
              rel="noopener"
              target="_self"
              aria-current="page"
              href="#projects_page"
            >
              Projects
            </ButtonLink>
          </div>
        </div>
        <!-- Social media-->
        <div class="hidden sm:flex space-x-2">
          <SocialMedia/>
        </div>
      </div>
    </div>
  </nav>
</template>
