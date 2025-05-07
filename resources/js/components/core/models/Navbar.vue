<script setup>
  import ButtonLink from '@components/core/links/ButtonLink.vue';
  import Instagram from '@components/core/svgs/Instagram.vue';
  import LinkedIn from '@components/core/svgs/LinkedIn.vue';
  import GitHub from '@components/core/svgs/GitHub.vue';
</script>

<template>
  <nav class="">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex flex-row h-16 items-center justify-around">
        <!-- Filler div we can add a button, but for now I keep it empty-->
        <div class="hidden sm:block"></div>
        <div class="hidden sm:block">
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
        </div>
      </div>
    </div>
  </nav>
</template>
