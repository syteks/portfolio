<script setup>
  import ButtonLink from '@components/core/links/ButtonLink.vue';
  import SocialMedia from '@components/core/models/SocialMedia.vue';
  import BaseLink from '@components/core/links/BaseLink.vue';
  import ColoredTitle from '@components/core/elements/ColoredTitle.vue';
  import { defineProps } from 'vue';

  const props = defineProps({
    isNavbarSolid: {
      type: Boolean,
      default: false
    }
  });
</script>

<template>
  <nav
    :class="props.isNavbarSolid ? 'bg-opacity-40' : 'bg-opacity-0'"
    class="bg-black  shadow-lg  fixed top-0 left-0 right-0 z-50 w-full"
  >
    <div class="container mx-auto flex items-center justify-center lg:justify-around">
      <div class="hidden sm:flex space-x-2">
        <BaseLink
          class="justify-center items-center"
          rel="noopener"
          target="_self"
          aria-current="page"
          href="#home_page"
        >
          <ColoredTitle
            :title="'SGT'"
            class="text-2xl"
          />
        </BaseLink>
      </div>
      <div class="sm:block">
        <div class="flex space-x-2">
          <ButtonLink
            class="px-3 py-2 text-sm sm:text-md"
            rel="noopener"
            target="_self"
            aria-current="page"
            href="#about_page"
          >
            About
          </ButtonLink>
          <ButtonLink
            class="px-3 py-2 text-sm sm:text-md"
            rel="noopener"
            target="_self"
            aria-current="page"
            href="#skills_page"
          >
            Skills
          </ButtonLink>
          <ButtonLink
            class="px-3 py-2 text-sm sm:text-md"
            rel="noopener"
            target="_self"
            aria-current="page"
            href="#experience_page"
          >
            Experience
          </ButtonLink>
          <ButtonLink
            class="px-3 py-2 text-sm sm:text-md"
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
      <div class="hidden sm:flex space-x-2 p-2">
        <SocialMedia/>
      </div>
    </div>
  </nav>
</template>
