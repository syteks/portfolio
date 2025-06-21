<script setup>
import Skills from '@/pages/Skills.vue';
import BaseLayout from '@/layouts/BaseLayout.vue';
import Experience from '@/pages/Experience.vue';
import About from '@/pages/About.vue';
import Projects from '@/pages/Projects.vue';
import SocialMedia from '@components/core/models/SocialMedia.vue';
import ColoredTitle from '@components/core/elements/ColoredTitle.vue';
import ColoredSeparator from '@components/core/elements/ColoredSeparator.vue';
import ExperienceBox from '@components/core/elements/ExperienceBox.vue';
import Footer from '@/pages/Footer.vue';
</script>

<template>
  <BaseLayout>
    <template #main>
      <section
        id="home_page"
        class="min-h-screen w-full"
      >
        <div class="sticky w-100 h-screen flex flex-col justify-center items-center">
          <div class="relative flex flex-col justify-center overflow-hidden font-sans ">
            <div class="flex flex-col justify-center items-center bg-transparent relative rounded-[0.60rem]">
              <div class="sm:h-[36rem] sm:w-[36rem] xs:w-[28rem] xs:h-[28rem] 2xs:w-[22rem] 2xs:h-[22rem] h-[18rem] w-[18rem]">
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
              <div class="flex font-sans items-center justify-center pt-6">
                <ColoredTitle
                  class="sm:text-4xl 2xs:text-3xl text-2xl"
                  :title="'Sergiu Grigore Turcanu'"
                  :enable-glow="true"
                />
              </div>
              <ColoredSeparator/>
              <div class="flex font-sans items-center justify-center sm:text-2xl text-xl my-2 ">
                <h2 class="text-white text-xl md:text-3xl font-light max-w-2xl mx-auto opacity-0 animate-slide-down-fade motion-reduce:animate-none">Senior Software Developer</h2>
              </div>
            </div>
          </div>
          <ExperienceBox class="animate-slide-in-left mb-4"/>
          <div class="flex space-x-2 duration-300 opacity-0 animate-fade-in-up motion-reduce:animate-none">
            <SocialMedia/>
          </div>
        </div>
      </section>
      <About></About>
      <Skills></Skills>
      <Experience></Experience>
      <Projects></Projects>
      <Footer/>
    </template>
  </BaseLayout>
</template>
