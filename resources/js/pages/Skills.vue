<script setup>
import { ref, onMounted, onUnmounted, shallowRef } from 'vue';
import ColoredTitle from '@components/core/elements/ColoredTitle.vue';
import ColoredSeparator from '@components/core/elements/ColoredSeparator.vue';
import PhpStorm from '@components/core/svgs/skills/PhpStorm.vue';
import JavaScript from '@components/core/svgs/skills/JavaScript.vue';
import TypeScript from '@components/core/svgs/skills/TypeScript.vue';
import GoLang from '@components/core/svgs/skills/GoLang.vue';
import CSharp from '@components/core/svgs/skills/CSharp.vue';
import CPlusPlus from '@components/core/svgs/skills/CPlusPlus.vue';
import MySQL from '@components/core/svgs/skills/MySQL.vue';
import FireStore from '@components/core/svgs/skills/FireStore.vue';
import MongoDB from '@components/core/svgs/skills/MongoDB.vue';
import MSSQLServer from '@components/core/svgs/skills/MSSQLServer.vue';
import Laravel from '@components/core/svgs/skills/Laravel.vue';
import VueJS from '@components/core/svgs/skills/VueJS.vue';
import TailwindCSS from '@components/core/svgs/skills/TailwindCSS.vue';
import JQuery from '@components/core/svgs/skills/jQuery.vue';
import CodeIgniter from '@components/core/svgs/skills/CodeIgniter.vue';
import GCP from '@components/core/svgs/skills/GCP.vue';
import ElasticSearch from '@components/core/svgs/skills/ElasticSearch.vue';
import Git from '@components/core/svgs/skills/Git.vue';
import BitBucket from '@components/core/svgs/skills/BitBucket.vue';
import GitHub from '@components/core/svgs/skills/GitHub.vue';
import GitLab from '@components/core/svgs/skills/GitLab.vue';
import Docker from '@components/core/svgs/skills/Docker.vue';
import Postman from '@components/core/svgs/skills/Postman.vue';
import Php from '@components/core/svgs/skills/Php.vue';
import Redis from '@components/core/svgs/skills/Redis.vue';
import NodeJS from '@components/core/svgs/skills/NodeJS.vue';
import React from '@components/core/svgs/skills/React.vue';
import OpenSuse from '@components/core/svgs/skills/OpenSuse.vue';
import Vite from '@components/core/svgs/skills/Vite.vue';
import LaravelNova from '@components/core/svgs/skills/LaravelNova.vue';
import AngularJS from '@components/core/svgs/skills/AngularJS.vue';
import Blazor from '@components/core/svgs/skills/Blazor.vue';
import WordPress from '@components/core/svgs/skills/WordPress.vue';
import NodeRed from '@components/core/svgs/skills/NodeRed.vue';
import AspNet from '@components/core/svgs/skills/AspNet.vue';
import Linux from '@components/core/svgs/skills/Linux.vue';
import Jira from '@components/core/svgs/skills/Jira.vue';
import VisualStudioCode from '@components/core/svgs/skills/VisualStudioCode.vue';
import Confluence from '@components/core/svgs/skills/Confluence.vue';
import DataGrip from '@components/core/svgs/skills/DataGrip.vue';
import PHPUnit from '@components/core/svgs/skills/PHPUnit.vue';
import Pinia from '@components/core/svgs/skills/Pinia.vue';
import OpsGenie from '@components/core/svgs/skills/OpsGenie.vue';

const selectedSkill = ref(null);
const progressBarWidth = ref('0%');
const visibleCategories = ref(new Set());

const showSkillDetails = (item) => {
  if (selectedSkill.value?.title === item.title) {
    return;
  }

  progressBarWidth.value = '0%';
  selectedSkill.value = item;

  setTimeout(() => {
    progressBarWidth.value = `${item.level}%`;
  }, 10);
};

const defaultIconClasses = 'h-10 w-10 mb-2 object-contain';
const largeIconClasses = 'h-10 w-24 mb-2 object-contain';

const skills = shallowRef([
  {
    title: 'Coding Languages',
    itemsColor: 'bg-green-400',
    borderColor: 'border-green-400',
    jsColor: '#4ade80',
    items: [
      { title: 'PHP', level: 100, icon: Php },
      { title: 'JavaScript', level: 80, icon: JavaScript },
      { title: 'TypeScript', level: 80, icon: TypeScript },
      { title: 'C#', level: 60, icon: CSharp },
      { title: 'GoLang', level: 60, icon: GoLang },
      { title: 'C++', level: 50, icon: CPlusPlus },
    ],
  },
  {
    title: 'Databases',
    itemsColor: 'bg-blue-400',
    borderColor: 'border-blue-400',
    jsColor: '#60a5fa',
    items: [
      { title: 'MySQL', level: 100, icon: MySQL },
      { title: 'FireStore', level: 100, icon: FireStore },
      { title: 'Redis', level: 70, icon: Redis },
      { title: 'MS SQL Server', level: 70, icon: MSSQLServer, classes: largeIconClasses },
      { title: 'MongoDB', level: 60, icon: MongoDB },
    ],
  },
  {
    title: 'Frameworks',
    itemsColor: 'bg-purple-400',
    borderColor: 'border-purple-400',
    jsColor: '#c084fc',
    items: [
      { title: 'Laravel', level: 100, icon: Laravel },
      { title: 'VueJS', level: 90, icon: VueJS },
      { title: 'Laravel Nova', level: 90, icon: LaravelNova },
      { title: 'Node Red', level: 90, icon: NodeRed },
      { title: 'NodeJS', level: 80, icon: NodeJS },
      { title: 'Tailwind CSS', level: 70, icon: TailwindCSS },
      { title: 'Blazor', level: 60, icon: Blazor },
      { title: 'jQuery', level: 60, icon: JQuery, classes: largeIconClasses },
      { title: '.NET', level: 60, icon: AspNet },
      { title: 'React', level: 50, icon: React },
      { title: 'WordPress', level: 40, icon: WordPress },
      { title: 'AngularJS', level: 30, icon: AngularJS },
      { title: 'Code Igniter', level: 30, icon: CodeIgniter },
    ],
  },
  {
    title: 'Tools',
    itemsColor: 'bg-yellow-400',
    borderColor: 'border-yellow-400',
    jsColor: '#facc15',
    items: [
      { title: 'PhpStorm', level: 100, icon: PhpStorm },
      { title: 'Postman', level: 100, icon: Postman },
      { title: 'PHPUnit', level: 100, icon: PHPUnit },
      { title: 'Git', level: 100, icon: Git },
      { title: 'BitBucket', level: 90, icon: BitBucket },
      { title: 'GitHub', level: 90, icon: GitHub },
      { title: 'GitLab', level: 90, icon: GitLab },
      { title: 'DataGrip', level: 90, icon: DataGrip },
      { title: 'OpsGenie', level: 80, icon: OpsGenie },
      { title: 'Pinia', level: 80, icon: Pinia },
      { title: 'Linux', level: 80, icon: Linux },
      { title: 'Jira', level: 80, icon: Jira },
      { title: 'Vite', level: 80, icon: Vite },
      { title: 'Elastic Search', level: 75, icon: ElasticSearch },
      { title: 'GCP', level: 70, icon: GCP },
      { title: 'Docker', level: 70, icon: Docker },
      { title: 'Visual Studio Code', level: 60, icon: VisualStudioCode },
      { title: 'Confluence', level: 60, icon: Confluence },
      { title: 'OpenSuse', level: 60, icon: OpenSuse },
    ],
  },
]);
let observer;

const setupObserver = () => {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Update the reactive state instead of directly manipulating the class
        const categoryTitle = entry.target.dataset.categoryTitle;

        visibleCategories.value.add(categoryTitle);

        // Stop observing this section once it has been animated
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('.category-section').forEach(section => {
    observer.observe(section);
  });
};

/**
 * Set up the observer to trigger the animation when the page comes into view
 */
onMounted(() => {
  setupObserver();
});

/**
 * Disconnect the observer when we unmount the component.
 */
onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

</script>

<template>
  <section id="skills_page" class="p-4 sm:p-0 min-h-screen w-full">
    <div class="w-full text-white min-h-screen p-4 sm:p-6 lg:p-8">
      <div class="max-w-7xl mx-auto">
        <ColoredTitle
          class="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16"
          title="Skills & Technologies"
          :enable-glow="true"
        />
        <div
          v-for="category in skills"
          :key="category.title"
          :data-category-title="category.title"
          class="mb-12 category-section"
        >
          <h2 class="w-full flex justify-center text-3xl font-bold text-white mb-4">{{ category.title }}</h2>
          <ColoredSeparator class="mb-6"/>
          <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div
              v-for="(item, index) in category.items"
              :key="item.title"
              @click="showSkillDetails(item)"
              :class="[
              'border-2 bg-gray-800',
              category.borderColor,
              selectedSkill?.title === item.title
                ? 'border-opacity-100'
                : 'border-opacity-30 hover:border-opacity-100',
              visibleCategories.has(category.title) ? 'animate-fall-in' : 'opacity-0'
            ]"
              :style="{ '--animation-delay': `${index * 100}ms` }"
              class="flex flex-col justify-between text-center p-4 rounded-lg font-semibold cursor-pointer transition-all duration-300 h-36"
            >
              <div class="flex flex-col items-center justify-center flex-grow">
                <component :is="item.icon" :class="item.classes ?? defaultIconClasses"/>
                <span class="text-sm sm:text-base text-gray-200">{{ item.title }}</span>
              </div>

              <transition
                enter-active-class="transition-all duration-500 ease-out"
                enter-from-class="opacity-0 max-h-0"
                enter-to-class="opacity-100 max-h-10"
                leave-active-class="transition-all duration-300 ease-in"
                leave-from-class="opacity-100 max-h-10"
                leave-to-class="opacity-0 max-h-0"
              >
                <div
                  v-if="selectedSkill?.title === item.title"
                  :key="selectedSkill.title"
                  class="w-full pt-3 overflow-hidden"
                >
                  <div class="w-full bg-gray-700 rounded-full h-3">
                    <div
                      :class="category.itemsColor"
                      class="h-3 rounded-full text-[10px] flex items-center justify-end pr-1 text-black font-bold transition-all duration-1000 ease-out"
                      :style="{ width: progressBarWidth }"
                    >
                      {{ selectedSkill.level }}%
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
