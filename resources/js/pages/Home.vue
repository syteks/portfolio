<script setup>
import { ref } from 'vue';
import Navbar from '@components/core/models/Navbar.vue';
import BaseLayout from '@/layouts/BaseLayout.vue';

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
                        <h2 class="text-white">Senior Software developer</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="skills_page">
          <div class="sticky h-screen py-8 bg-gradient-to-b from-gray-600 to-gray-800  text-white">
            <div class="flex justify-center">
              <h1 class="mb-4 text-4xl font-extrabold content-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Skills</h1>
            </div>
            <div class="flex justify-center">
              <div class="max-w-sm w-[25%] h-fit bg-white border mx-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coding Languages</h5>
                  </a>
                  <ul class="mb-3 max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-800 dark:text-white">PHP</span>

                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-800 dark:text-white">JavaScript/Typescript</span>

                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-800 dark:text-white">GoLang</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-green-800 dark:text-white">C#</span>
                    </li>
                  </ul>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="max-w-sm w-[25%] h-fit bg-white border mx-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Databases</h5>
                  </a>
                  <ul class="mb-3 max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-white">MySQL</span>

                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-white">NoSQL</span>

                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-white">FireStore</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-white">MongoDB</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-white">MS SQL Server</span>
                    </li>
                  </ul>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="max-w-sm w-[25%] h-fit bg-white border mx-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Frameworks</h5>
                  </a>
                  <ul class="mb-3 max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-white">Laravel</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-white">Vue</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-white">NodeJS</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-white">jQuery</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-white">Code Igniter</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-white">Tailwind CSS</span>
                    </li>
                  </ul>
                  <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div class="max-w-sm w-[25%] h-fit bg-white border mx-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <div class="p-5">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tools</h5>
                  </a>
                  <ul class="mb-3 max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">PhpStorm</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">Google Cloud Platform (GCP)</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">Elastic Search</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">Git</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">BitBucket</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">GitHub</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">GitLab</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">Docker</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">Postman</span>
                    </li>
                    <li>
                      <span class="bg-blue-100 text-s font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-700 dark:text-white">Redis</span>
                    </li>
                  </ul>
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
        <section id="experience_page">
          <div
            class="sticky top-0 h-screen bg-gradient-to-b from-gray-800 to-gray-600 text-white"
          >
            <div class="flex justify-center">
              <h1 class="mb-4 text-4xl font-extrabold content-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Experience</h1>
            </div>
            <div class="flex justify-center">
              <div
                class="relative group flex flex-col items-center justify-center w-fit h-fit px-5"
              >
                <div
                  class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50"
                >
                  <div
                    class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"
                  >
                  </div>
                  <div
                    class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"
                  ></div>
                  <div
                    class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"
                  ></div>
                  <div
                    class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"
                  ></div>
                  <div
                    class="flex items-center justify-center work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]"
                  >
                    <p class="text-5xl pt-4">Aylo</p>
                  </div>
                </div>
              </div>
              <div
                class="relative group flex flex-col items-center justify-center w-fit h-fit px-5"
              >
                <div
                  class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50"
                >
                  <div
                    class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"
                  >
                  </div>
                  <div
                    class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"
                  ></div>
                  <div
                    class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"
                  ></div>
                  <div
                    class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"
                  ></div>
                  <div
                    class="flex items-center justify-center work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]"
                  >
                    <p class="text-5xl pt-4">Tollé</p>
                  </div>
                </div>
              </div>
              <div
                class="relative group flex flex-col items-center justify-center w-fit h-fit px-5"
              >
                <div
                  class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50"
                >
                  <div
                    class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"
                  >
                  </div>
                  <div
                    class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"
                  ></div>
                  <div
                    class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"
                  ></div>
                  <div
                    class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"
                  ></div>
                  <div
                    class="flex items-center justify-center work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]"
                  >
                    <p class="text-5xl pt-4">Spordle</p>
                  </div>
                </div>
              </div>
              <div
                class="relative group flex flex-col items-center justify-center w-fit h-fit px-5"
              >
                <div
                  class="file relative w-60 h-40 cursor-pointer origin-bottom [perspective:1500px] z-50"
                >
                  <div
                    class="work-5 bg-amber-600 w-full h-full origin-top rounded-2xl rounded-tl-none group-hover:shadow-[0_20px_40px_rgba(0,0,0,.2)] transition-all ease duration-300 relative after:absolute after:content-[''] after:bottom-[99%] after:left-0 after:w-20 after:h-4 after:bg-amber-600 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[15px] before:left-[75.5px] before:w-4 before:h-4 before:bg-amber-600 before:[clip-path:polygon(0_35%,0%_100%,50%_100%);]"
                  >
                  </div>
                  <div
                    class="work-4 absolute inset-1 bg-zinc-400 rounded-2xl transition-all ease duration-300 origin-bottom select-none group-hover:[transform:rotateX(-20deg)]"
                  ></div>
                  <div
                    class="work-3 absolute inset-1 bg-zinc-300 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-30deg)]"
                  ></div>
                  <div
                    class="work-2 absolute inset-1 bg-zinc-200 rounded-2xl transition-all ease duration-300 origin-bottom group-hover:[transform:rotateX(-38deg)]"
                  ></div>
                  <div
                    class="flex items-center justify-center work-1 absolute bottom-0 bg-gradient-to-t from-amber-500 to-amber-400 w-full h-[156px] rounded-2xl rounded-tr-none after:absolute after:content-[''] after:bottom-[99%] after:right-0 after:w-[146px] after:h-[16px] after:bg-amber-400 after:rounded-t-2xl before:absolute before:content-[''] before:-top-[10px] before:right-[142px] before:size-3 before:bg-amber-400 before:[clip-path:polygon(100%_14%,50%_100%,100%_100%);] transition-all ease duration-300 origin-bottom group-hover:shadow-[inset_0_20px_40px_#fbbf24,_inset_0_-20px_40px_#d97706] group-hover:[transform:rotateX(-46deg)_translateY(1px)]"
                  >
                    <p class="text-5xl pt-4">Polygon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects_page">
          <div class="sticky top-0 h-screen bg-gradient-to-b from-gray-600 to-gray-800 text-white">
            <div class="flex justify-center">
              <h1 class="mb-4 text-4xl font-extrabold content-center leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Projects</h1>
            </div>
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
