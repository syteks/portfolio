<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import ColoredTitle from '@components/core/elements/ColoredTitle.vue';
import LightBulb from '@components/core/svgs/LightBulb.vue';
import IconAngleBrackets from '@components/core/svgs/IconAngleBrackets.vue';
import Briefcase from '@components/core/svgs/Briefcase.vue';
import FallAndFadeTexts from '@components/core/elements/FallAndFadeTexts.vue';

// The journey content
const myJourneyContent = [
  {
    title: 'The Spark',
    description: 'It all started at 16 with a spark of curiosity and an obsession with tutorials. I was driven to understand how my favorite websites and games were built, a fascination that quickly grew into a lifelong passion for creating digital experiences from scratch.',
    icon: LightBulb,
  },
  {
    title: 'Learning the Craft',
    description: 'That curiosity turned into code at age 18. While building my first projects in PHP and C++, I discovered my true calling wasn\'t just in the final product, but in solving the complex puzzles behind it. I found my passion in backend development, drawn to the power of logic and architecture challenges.',
    icon: IconAngleBrackets,
  },
  {
    title: 'Professional Growth',
    description: 'In the professional world, my skills evolved beyond just code. I gained a holistic understanding of the project lifecycle—from planning and risk assessment to upholding industry standards. While PHP is my specialty, I\'m a versatile developer proficient in JS/TS, C#, Java, Go, and more.',
    icon: Briefcase,
  },
];

const journeyContainer = ref(null);
const animatedElements = ref(new Set());

let observer = null;


onMounted(() => {
  const options = {
    threshold: 0.3,
    rootMargin: '0px 0px -50px 0px',
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const key = entry.target.dataset.animKey;

          animatedElements.value.add(key);

        observer.unobserve(entry.target);
      }
    });
  }, options);

  if (journeyContainer.value) {
    journeyContainer.value.querySelectorAll('.animatable').forEach(el => {
      observer.observe(el);
    });
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

const quotes = [
  'From curiosity to creation.',
  'First, solve the problem. Then, write the code.',
  'Code is like humor. When you have to explain it, it’s bad.',
  'The best way to predict the future is to invent it.',
];

</script>

<style scoped>


.animatable {
  opacity: 0;
}

.animatable.start-animation {
  animation-name: fall-in;
  animation-duration: 0.7s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: var(--delay);
}
</style>


<template>
  <section id="about_page" class="p-4 sm:p-0 min-h-screen w-full">
    <div
      ref="journeyContainer"
      class="w-full max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl"
    >
      <div
        class="text-center mb-12 animatable"
        :class="{ 'start-animation': animatedElements.has('title-section') }"
        :style="{ '--delay': '0.2s' }"
        data-anim-key="title-section"
      >
        <ColoredTitle
          title="My journey"
          class="text-4xl font-extrabold"
          :enable-glow="true"
        />

        <FallAndFadeTexts :texts="quotes"/>
      </div>

      <!-- Journey Items Section -->
      <div class="space-y-12">
        <div
          v-for="(journey, index) in myJourneyContent"
          :key="journey.title"
          class="flex flex-col md:flex-row justify-center items-center gap-6 animatable p-4 rounded-lg transition-all duration-300 text-gray-100 hover:text-yellow-400 dark:text-white hover:bg-gray-500/20 hover:shadow-lg transform hover:-translate-y-1"
          :class="{ 'start-animation': animatedElements.has(journey.title) }"
          :style="{ '--delay': `${0.4 + index * 0.2}s` }"
          :data-anim-key="journey.title"
        >
          <!-- Icon (replaces the icon from your <AboutMeJourney> component) -->
          <div class="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white shadow-lg flex-shrink-0">
            <component :is="journey.icon" class="w-8 h-8 " />
          </div>
          <!-- Text Content -->
          <div>
            <h3 class="text-2xl font-bold mb-2">{{ journey.title }}</h3>
            <p class="text-gray-300 leading-relaxed">{{ journey.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
