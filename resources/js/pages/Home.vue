<script setup>
  import Skills from '@/pages/Skills.vue';
  import BaseLayout from '@/layouts/BaseLayout.vue';
  import Experience from '@/pages/Experience.vue';

</script>

<template>
  <BaseLayout>
    <template #main>
      <div class="relative">
        <section id="home_page">
          <div class="sticky w-100 top-0 h-screen flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-gray-600">
            <div class="relative flex flex-col justify-center overflow-hidden py-6 font-sans sm:py-12">
              <div class=" flex w-full items-center justify-center">
                <div class="flex relative items-center overflow-hidden rounded-xl border border-gray-800 p-[1.5px]">
                  <div class="animate-rotate absolute inset-0 rounded-full bg-[conic-gradient(#0ea5e9_20deg,transparent_120deg)]"></div>
                  <div class="bg-transparent">
                    <div class="flex flex-col relative rounded-[0.60rem] bg-gradient-to-t from-gray-800 to-gray-700 p-2">
                      <div class="sm:h-[32rem] sm:w-[32rem] w-[18rem] h-[18rem] ">
                        <div class="relative w-full h-full">
                          <div class="absolute inset-0 rounded-full border-2 border-red-500">
                            <img
                              class="h-full w-full object-cover rounded-full"
                              src="/storage/images/PortfolioTest.jpg"
                              alt="pictures"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="flex font-sans items-center justify-center my-2 xl:text-4xl md:text-3xl sm:text-2xl ">
                        <h1 class="text-white">Sergiu Grigore Turcanu</h1>
                      </div>
                      <div class="flex font-sans items-center justify-center my-2 xl:text-3xl md:text-2xl sm:text-1xl">
                        <h2 class="text-white">Senior Software Developer</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Skills></Skills>
        <Experience></Experience>
        <section id="projects_page">
          <div class="pt-24 sticky top-0 h-screen bg-gradient-to-b from-gray-600 to-gray-800 text-white">
            <div class="flex justify-center">
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4">
                <a href="https://github.com/syteks/FlavorGuardianBot"
                   target="_blank"
                >
                  <img
                    class="rounded-t-lg"
                    src="/storage/images/PortfolioTest.jpg" alt="" />
                </a>
                <div class="p-5">
                  <a href="https://github.com/syteks/FlavorGuardianBot"
                    target="_blank"
                  >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mx-4">
                <a href="https://github.com/syteks/goat"
                  target="_blank"
                >
                  <img
                    class="rounded-t-lg"
                    src="/storage/images/PortfolioTest.jpg"
                    alt=""
                  />
                </a>
                <div class="p-5">
                  <a href="https://github.com/syteks/goat"
                    target="_blank"
                  >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
  </BaseLayout>
</template>
