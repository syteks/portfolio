<script setup>
import SocialMedia from '@components/core/models/SocialMedia.vue';
</script>

<template>
  <section id="home_page">
    <div class="sticky w-100 h-screen flex flex-col items-center bg-gradient-to-b from-gray-800 to-gray-600">
      <div class="relative flex flex-col justify-center overflow-hidden pt-[6rem] lg:pt-44  py-6 font-sans sm:py-12">
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
                        src="/images/PortfolioTest.jpg"
                        alt="senior-backend-developer-sergiu-grigore-turcanu"
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
      <div class="flex md:hidden space-x-2">
        <SocialMedia/>
      </div>
    </div>
  </section>
</template>
