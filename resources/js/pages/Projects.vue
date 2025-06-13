<script setup>
  const projects = [
    {
      projectURL: "https://github.com/syteks/FlavorGuardianBot",
      imageName: "FlavorGuardian.png",
      projectTitle: "FlavorGuardian - TypeScript Discord Bot",
      projectDescription: "Developed a Discord bot in TypeScript to facilitate sharing YouTube videos and playing music in voice channels, acting as a \"Jukebox\" for friends. This project served as a hands-on learning experience with TypeScript, enhancing programming skills through practical application. While currently not maintained due to time constraints, the development process provided valuable experience in bot creation and TypeScript.",
    },
    {
      projectURL: "https://github.com/syteks/goat",
      imageName: "Goat.png",
      projectTitle: "GOAT - GoLang Discord Bot",
      projectDescription: "Developed a Reddit Meme Bot using GoLang to programmatically fetch memes from Reddit. This project was initiated out of personal interest and a desire to gain hands-on experience with GoLang, focusing on practical application in a self-directed learning environment.",
    },
    {
      projectURL: "https://github.com/syteks/portfolio",
      imageName: "Portfolio.png",
      projectTitle: "Portfolio - (PHP & Vue.js & TailwindCSS)",
      projectDescription: "Developed a web-based platform using PHP for the backend and Vue.js for the frontend, leveraging a strong preference for these languages in web development. As a backend developer, I utilized resources like Google and Gemini to explore diverse design styles and apply accumulated knowledge to the project. The current focus is on the Vue.js frontend, with future plans to implement an admin panel to enable dynamic content updates, moving away from hardcoded content.",
    },
  ]
</script>
<template>
  <section id="projects_page">
    <div class="pt-24 p-8 md:pl-0 sticky min-h-screen py-8 bg-gradient-to-b from-gray-600 to-gray-800  text-white">
      <div class="flex justify-center flex-col md:flex-row">
        <div
          v-for="project in projects"
          class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4 mb-4"
        >
          <a
            :href="project.projectURL"
            target="_blank"
          >
            <img
              class="rounded-t-lg"
              :src="'/storage/images/' + project.imageName" alt="" />
          </a>
          <div class="p-5">
            <a
              :href="project.projectURL"
              target="_blank"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {{ project.projectTitle }}
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {{ project.projectDescription }}
            </p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Show me the code
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

