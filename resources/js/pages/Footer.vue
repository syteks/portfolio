<template>
  <footer class="bg-black bg-opacity-40 text-gray-300">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div class="md:col-span-1 text-center md:text-left">
          <h3 class="text-lg font-semibold text-white mb-4">Connect with Me</h3>
          <div class="flex justify-center md:justify-start space-x-2">
            <SocialMedia :width="32" :height="32"/>
          </div>
        </div>

        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li><a href="#home_page" class="hover:text-yellow-400 transition-colors duration-300">Home</a></li>
            <li><a href="#about_page" class="hover:text-yellow-400 transition-colors duration-300">About</a></li>
            <li><a href="#skills_page" class="hover:text-yellow-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#experience_page" class="hover:text-yellow-400 transition-colors duration-300">Experience</a></li>
            <li><a href="#projects_page" class="hover:text-yellow-400 transition-colors duration-300">Projects</a></li>
          </ul>
        </div>

        <div class="text-center md:text-left">
          <h3 class="text-lg font-semibold text-white mb-4">Contact Me</h3>
          <p class="mb-4">
            Have a project in mind or want to connect? Feel free to reach out.
          </p>
          <a
            :href="`mailto:${email}`"
            class="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 font-bold px-6 py-3 rounded-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg hover:shadow-yellow-400/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <span>Contact Me</span>
          </a>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-800 pt-8 text-center">
        <p class="text-sm text-gray-300">&copy; {{ currentYear }} Sergiu Grigore Turcanu. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed } from 'vue';
import SocialMedia from '@components/core/models/SocialMedia.vue';

const email = ref('sergiugrigoreturcanu@gmail.com');
const currentYear = computed(() => new Date().getFullYear());
</script>
