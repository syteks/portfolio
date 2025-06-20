<template>
  <div class="w-full bg-gray-900 text-white min-h-screen p-4 sm:p-6 lg:p-8">
    <div class="max-w-7xl mx-auto">
      <h1 class="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">Skills & Technologies</h1>

      <!-- Loop through each category -->
      <div
        v-for="category in skills"
        :key="category.title"
        :data-category-title="category.title"
        class="mb-12 category-section"
      >
        <!-- Category Title and Separator -->
        <h2 class="text-3xl font-bold text-white mb-4">{{ category.title }}</h2>
        <hr :class="['border-opacity-20', category.borderColor]" class="mb-6">

        <!-- Responsive Grid for Individual Skill Items -->
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
              // FIX: Animation is now controlled by reactive state, preventing the bug.
              visibleCategories.has(category.title) ? 'animate-fall-in' : 'opacity-0'
            ]"
            :style="{ '--animation-delay': `${index * 100}ms` }"
            class="skill-item flex flex-col justify-between text-center p-4 rounded-lg font-semibold cursor-pointer transition-all duration-300 h-36"
          >
            <!-- Top section with Icon and Title -->
            <div class="flex flex-col items-center justify-center flex-grow">
              <img :src="item.icon" :alt="`${item.title} logo`" class="h-10 w-10 mb-2 object-contain" />
              <span class="text-sm sm:text-base text-gray-200">{{ item.title }}</span>
            </div>

            <!-- Progress Bar Display Area (conditionally rendered) -->
            <transition
              enter-active-class="transition-all duration-500 ease-out"
              enter-from-class="opacity-0 max-h-0"
              enter-to-class="opacity-100 max-h-10"
              leave-active-class="transition-all duration-300 ease-in"
              leave-from-class="opacity-100 max-h-10"
              leave-to-class="opacity-0 max-h-0"
            >
              <div v-if="selectedSkill?.title === item.title" :key="selectedSkill.title" class="w-full pt-3 overflow-hidden">
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
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

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

const skills = ref([
  {
    title: 'Coding Languages',
    itemsColor: 'bg-green-400',
    borderColor: 'border-green-400',
    jsColor: '#4ade80',
    items: [
      { title: 'PHP', level: 95, icon: 'https://www.svgrepo.com/show/373972/php.svg' },
      { title: 'JavaScript', level: 90, icon: 'https://www.svgrepo.com/show/349419/javascript.svg' },
      { title: 'TypeScript', level: 90, icon: 'https://cdn.worldvectorlogo.com/logos/typescript.svg' },
      { title: 'GoLang', level: 65, icon: 'https://cdn.worldvectorlogo.com/logos/go-6.svg' },
      { title: 'C#', level: 75, icon: 'https://cdn.worldvectorlogo.com/logos/c--4.svg' },
      { title: 'C++', level: 60, icon: 'https://cdn.worldvectorlogo.com/logos/c.svg' },
    ],
  },
  {
    title: 'Databases',
    itemsColor: 'bg-blue-400',
    borderColor: 'border-blue-400',
    jsColor: '#60a5fa',
    items: [
      { title: 'MySQL', level: 90, icon: 'https://www.svgrepo.com/show/373888/mysql.svg' },
      { title: 'FireStore', level: 80, icon: 'https://www.svgrepo.com/show/373595/firebase.svg' },
      { title: 'MongoDB', level: 70, icon: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      { title: 'MS SQL Server', level: 75, icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-sql-server-1.svg' },
      { title: 'Redis', level: 85, icon: 'https://cdn.worldvectorlogo.com/logos/redis.svg' },
    ],
  },
  {
    title: 'Frameworks',
    itemsColor: 'bg-purple-400',
    borderColor: 'border-purple-400',
    jsColor: '#c084fc',
    items: [
      { title: 'Laravel', level: 95, icon: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg' },
      { title: 'VueJS', level: 85, icon: 'https://cdn.worldvectorlogo.com/logos/vue-9.svg' },
      { title: 'Tailwind CSS', level: 90, icon: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
      { title: 'NodeJS', level: 80, icon: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
      { title: 'jQuery', level: 70, icon: 'https://cdn.worldvectorlogo.com/logos/jquery-1.svg' },
      { title: 'Code Igniter', level: 65, icon: 'https://cdn.worldvectorlogo.com/logos/codeigniter.svg' },
    ],
  },
  {
    title: 'Tools',
    itemsColor: 'bg-yellow-400',
    borderColor: 'border-yellow-400',
    jsColor: '#facc15',
    items: [
      { title: 'PhpStorm', level: 95, icon: 'https://cdn.worldvectorlogo.com/logos/phpstorm-1.svg' },
      { title: 'GCP', level: 70, icon: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
      { title: 'Elastic Search', level: 75, icon: 'https://cdn.worldvectorlogo.com/logos/elasticsearch.svg' },
      { title: 'Git', level: 95, icon: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
      { title: 'BitBucket', level: 85, icon: 'https://cdn.worldvectorlogo.com/logos/bitbucket-1.svg' },
      { title: 'GitHub', level: 90, icon: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
      { title: 'GitLab', level: 85, icon: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg' },
      { title: 'Docker', level: 80, icon: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
      { title: 'Postman', level: 90, icon: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
    ],
  },
]);

let observer;

const setupObserver = () => {
  const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
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

onMounted(() => {
  setupObserver();
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

</script>

<style scoped>
@keyframes fall-in {
  from {
    opacity: 0;
    transform: translateY(-20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.skill-item.animate-fall-in {
  animation-name: fall-in;
  animation-duration: 0.5s;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  animation-delay: var(--animation-delay);
}
</style>
