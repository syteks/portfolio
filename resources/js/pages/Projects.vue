<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ColoredTitle from '@components/core/elements/ColoredTitle.vue';

const projects = ref([
  {
    title: 'FlavorGuardianBot',
    description: 'This project allowed me to deepen my understanding of TypeScript by developing a Discord bot capable of playing music and triggering specific audio clips in response to custom commands. Intended primarily for personal entertainment, the bot functioned as a soundboard, often used among friends during casual Discord sessions to play modern memes and share a laugh.',
    tech: ['TypeScript', 'NodeJS', 'MongoDB'],
    image: 'images/flavorGuardian.jpg',
    link: 'https://github.com/syteks/FlavorGuardianBot',
  },
  {
    title: 'GOAT',
    description: 'Developed in Go, this project was primarily an exploration of the Reddit API and served as a fun experiment in building a bot capable of fetching memes from any subreddit of choice. Designed for personal use, the bot was created to easily retrieve and share memes with friends—perfect for moments when we wanted a quick laugh without scrolling through Reddit manually.',
    tech: ['GoLang', 'Reddit API'],
    image: 'images/goat.jpg',
    link: 'https://github.com/syteks/goat',
  },
  {
    title: 'Portfolio',
    description: 'This project is built using PHP, Vue, Vite, and TailwindCSS. At its current stage, it is primarily a front-facing application without a functional back end. However, numerous features are planned to enhance the management and scalability of the portfolio. Future updates will include an administrative panel that allows for seamless input and updates of all portfolio content.',
    tech: ['PHP', 'Vue 3', 'Vite', 'Tailwind CSS'],
    image: 'images/portfolio.jpg',
    link: 'https://github.com/syteks/portfolio',
  },
]);

// Color mapping for technology pills
const techColors = {
  'TypeScript': 'bg-blue-500 text-white',
  'NodeJS': 'bg-green-600 text-white',
  'MongoDB': 'bg-green-800 text-white',
  'GoLang': 'bg-cyan-500 text-white',
  'Reddit API': 'bg-orange-500 text-white',
  'PHP': 'bg-indigo-500 text-white',
  'Vue 3': 'bg-emerald-500 text-white',
  'Vite': 'bg-purple-600 text-white',
  'Tailwind CSS': 'bg-sky-500 text-white',
};

const animatedElements = ref(new Set());
let observer;

const setupObserver = () => {
  if (observer) {
    observer.disconnect();
  }

  const options = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px',
  };
  // Observe when the content comes in view to animate.
  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const key = entry.target.dataset.animKey;

        if (key) {
          animatedElements.value.add(key);
        }

        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.animatable').forEach(el => {
    observer.observe(el);
  });
};

/**
 * Set up the observer when we mount.
 */
onMounted(() => {
  setupObserver();
});

/**
 * Destroy the observer when the component unmounts.
 */
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

</script>

<template>
  <section id="projects_page" class="p-4 sm:p-0 min-h-screen w-full">
    <div class="w-full text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="max-w-7xl mx-auto">
        <ColoredTitle
          class="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16"
          title="My Projects"
          :enable-glow="true"
        />
        <div class="space-y-16">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="animatable grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center"
            :class="{ 'start-animation': animatedElements.has(project.title) }"
            :data-anim-key="project.title"
            :style="{ 'transition-delay': `${index * 200}ms` }"
          >
            <div :class="index % 2 === 0 ? 'md:order-1' : 'md:order-2'">
              <img :src="project.image" :alt="project.title" class="rounded-lg shadow-2xl w-full h-auto object-cover"/>
            </div>

            <div :class="index % 2 === 0 ? 'md:order-2' : 'md:order-1'">
              <h2 class="text-3xl font-bold text-yellow-400 mb-3">{{ project.title }}</h2>
              <p class="text-gray-300 mb-6 text-base leading-relaxed">
                {{ project.description }}
              </p>

              <div class="mb-6">
                <h3 class="text-lg font-semibold text-white mb-3">Tech Stack:</h3>
                <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1 rounded-full text-sm font-semibold"
                  :class="[techColors[tech] || 'bg-gray-700 text-gray-200']"
                >
                  {{ tech }}
                </span>
                </div>
              </div>

              <a
                :href="project.link"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-bold rounded-lg transition-all duration-300 hover:bg-yellow-300 hover:shadow-lg"
              >
                <span>Go to Code</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
