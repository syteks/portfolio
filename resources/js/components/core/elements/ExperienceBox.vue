<script setup>
/**
 * Gets the years of working experience since 2019
 * @return {number}
 */
const getYearsOfExperience = () => {
  // Gets the date when I first started programming professionally
  const startDate = new Date(2019, 1, 1);
  const currentDate = new Date();

  const timeDifference = currentDate.getTime() - startDate.getTime();
  const years = timeDifference / (1000 * 3600 * 24 * 365);

  return Math.round(years);
};
</script>

<template>
  <div
    class="group bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:bg-blue-500 dark:hover:bg-blue-600 transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shadow-xl"
  >
    <div class="flex items-center space-x-4">
      <!-- Icon representing job experience -->
      <div class="bg-blue-100 dark:bg-gray-700 p-3 rounded-full group-hover:bg-white transition-colors duration-300">
        <svg
          class="w-6 h-6 text-blue-500 dark:text-blue-400 group-hover:text-blue-600 transition-colors duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>
      </div>
      <div>
        <p class="text-xl font-bold text-gray-800 dark:text-white group-hover:text-white transition-colors duration-300">{{ getYearsOfExperience() }} years</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-100 transition-colors duration-300">of Experience</p>
      </div>
    </div>
  </div>
</template>
