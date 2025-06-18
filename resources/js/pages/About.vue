<script setup>
import SocialMedia from '@components/core/models/SocialMedia.vue';
import ColoredTitle from '@components/core/elements/ColoredTitle.vue';
import AboutPageDescription from '@components/modules/about/AboutPageDescription.vue';
</script>

<template>
<!--  flex items-center justify-center max-w-4xl mx-auto text-white-->
  <section class="min-h-screen w-full flex justify-center items-center">
    <div class="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0 max-w-4xl">
      <AboutPageDescription class="block sm:hidden"/>
      <div class="flex flex-col justify-center items-center w-full bg-opacity-50 rounded-lg shadow-xl p-4 pt-0 sm:pt-4 pb-0 sm:pb-4">
        <img
          src="/images/AboutImage.png"
          alt="Software Developer backend laptop"
          class="rounded-lg w-auto sm:w-full h-auto object-cover mb-4"
        >
        <p class="text-lg text-gray-200">
          Dedicated to crafting innovative solutions and bringing digital ideas to life. My passion lies in building robust, user-friendly applications that make a real impact.
        </p>
      </div>
      <div class="flex justify-center mb-8">
        <div class="flex items-center gap-4 bg-white/5 border border-white/10 backdrop-blur-sm px-6 py-4 rounded-xl shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h3.5a1 1 0 011 1v1h2v-1a1 1 0 011-1H17a2 2 0 012 2v12a2 2 0 01-2 2z" />
          </svg>
          <div class="text-left">
            <p class="text-xl font-semibold">5+ Years</p>
            <p class="text-sm text-gray-400">Professional Experience</p>
          </div>
        </div>
      </div>
      <div class="w-full flex flex-col space-y-8">
        <AboutPageDescription class="hidden sm:block"/>
        <div class="bg-purple-500 bg-opacity-20 rounded-lg shadow-xl p-6">
          <h3 class="text-3xl font-bold mb-4 text-pink-300">Experience</h3>
          <p class="text-5xl font-extrabold text-yellow-300">5+ years</p>
        </div>
      </div>
    </div>
  </section>
</template>
