<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import ColoredTitle from '@components/core/elements/ColoredTitle.vue';
import LightBulb from '@components/core/svgs/LightBulb.vue';
import IconAngleBrackets from '@components/core/svgs/IconAngleBrackets.vue';
import Briefcase from '@components/core/svgs/Briefcase.vue';
import AboutMeJourney from '@components/core/elements/AboutMeJourney.vue';
import FallAndFadeTexts from '@components/core/elements/FallAndFadeTexts.vue';

// The journey content
const myJourneyContent = [
  {
    title: 'The Spark',
    description: 'It all started at 16 with a spark of curiosity and an obsession with tutorials. I was driven to understand how my favorite websites and games were built, a fascination that quickly grew into a lifelong passion for creating digital experiences from scratch.',
    icon: LightBulb,
    animationDelay: '0.4s',
  },
  {
    title: 'Learning the Craft',
    description: 'That curiosity turned into code at age 18. While building my first projects in PHP and C++, I discovered my true calling wasn\'t just in the final product, but in solving the complex puzzles behind it. I found my passion in backend development, drawn to the power of logic and architecture challenges.',
    icon: IconAngleBrackets,
    animationDelay: '0.6s',
  },
  {
    title: 'Professional Growth',
    description: 'In the professional world, my skills evolved beyond just code. I gained a holistic understanding of the project lifecycle—from planning and risk assessment to upholding industry standards. While PHP is my specialty, I\'m a versatile developer proficient in JS/TS, C#, Java, Go, and more.',
    icon: Briefcase,
    animationDelay: '0.8s',
  },
];

const journeyContainer = ref(null);
const startAnimation = ref(false);

let observer = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        startAnimation.value = true;
        observer.disconnect();
      }
    },
    {
      // Trigger when 20% of the element is visible.
      threshold: 0.2,
    },
  );

  // Start observing the component's main container.
  if (journeyContainer.value) {
    observer.observe(journeyContainer.value);
  }
});

onBeforeUnmount(() => {
  // Clean up the observer when the component is destroyed.
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

<template>
  <section id="about_page" class="p-4 sm:p-0 min-h-screen w-full">
    <div
      ref="journeyContainer"
      class="w-full max-w-4xl mx-auto p-6 sm:p-10 rounded-2xl"
    >
      <div
        class="text-center mb-12"
        :class="{ 'animate-about-me-page-fade-in': startAnimation, 'opacity-0': !startAnimation }"
        style="animation-delay: 0.2s;"
      >
        <ColoredTitle
          title="My journey"
          class="text-4xl font-extrabold"
          :enable-glow="true"
        />
        <FallAndFadeTexts :texts="quotes"/>
      </div>

      <div class=" sm:block space-y-12">
        <AboutMeJourney
          v-for="journey in myJourneyContent"
          :icon="journey.icon"
          :title="journey.title"
          :description="journey.description"
          :animation-delay="journey.animationDelay"
          :start-animation="startAnimation"
        />
      </div>
    </div>
  </section>
</template>
