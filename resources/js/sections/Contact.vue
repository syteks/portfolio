<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { profile } from '@/data/profile';
import { navItems } from '@/data/navigation';
import CommandLine from '@components/ui/CommandLine.vue';
import SocialLinks from '@components/ui/SocialLinks.vue';
import Mail from '@components/core/svgs/Mail.vue';

const { t } = useI18n({ useScope: 'global' });
const year = computed(() => new Date().getFullYear());
</script>

<template>
  <section id="contact" class="w-full px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
    <div class="mx-auto w-full max-w-3xl">
      <CommandLine command="./contact.sh" show-cursor class="mb-6" v-reveal />

      <!-- Card -->
      <div
        v-reveal
        class="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[#1f2335]/70 to-[#16161e]/60 px-6 py-12 text-center sm:px-12 sm:py-16"
      >
        <!-- soft glow -->
        <div
          aria-hidden="true"
          class="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-[#9ece6a]/10 blur-3xl"
        ></div>

        <div class="relative">
          <!-- availability badge -->
          <span
            class="inline-flex items-center gap-2 rounded-full border border-[#9ece6a]/30 bg-[#9ece6a]/10 px-3 py-1 font-mono text-xs text-[#9ece6a]"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9ece6a] opacity-75"
              ></span>
              <span class="relative inline-flex h-2 w-2 rounded-full bg-[#9ece6a]"></span>
            </span>
            {{ t('profile.availability') }}
          </span>

          <!-- headline -->
          <h2
            class="mt-6 text-3xl font-bold tracking-tight text-[#c0caf5] sm:text-4xl"
          >
            {{ t('contact.headlinePre') }}
            <span class="text-[#9ece6a]">{{ t('contact.headlineAccent') }}</span>.
          </h2>

          <p class="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#a9b1d6]">
            {{ t('contact.blurb') }}
          </p>

          <!-- email CTA -->
          <a
            :href="`mailto:${profile.email}`"
            class="group mt-8 inline-flex max-w-full items-center justify-center gap-2.5 break-all rounded-lg border border-[#9ece6a]/50 bg-[#9ece6a]/10 px-4 py-3 font-mono text-xs text-[#9ece6a] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9ece6a]/20 hover:shadow-lg hover:shadow-[#9ece6a]/20 active:-translate-y-0.5 active:bg-[#9ece6a]/20 sm:px-6 sm:text-sm"
          >
            <Mail class="h-5 w-5 shrink-0" />
            {{ profile.email }}
          </a>

          <!-- socials -->
          <div class="mt-10">
            <p class="mb-4 font-mono text-xs text-[#565f89]">// {{ t('contact.elsewhere') }}</p>
            <div class="flex justify-center">
              <SocialLinks :size="18" labelled />
            </div>
          </div>
        </div>
      </div>

      <!-- Footer line -->
      <div
        class="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row"
      >
        <nav
          class="flex flex-wrap justify-center gap-4 font-mono text-xs text-[#9aa5ce]"
        >
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="transition-colors hover:text-[#9ece6a] active:text-[#9ece6a]"
          >
            {{ item.command }}
          </a>
        </nav>
        <p class="font-mono text-xs text-[#565f89]">
          © {{ year }} {{ profile.name }}
        </p>
      </div>
    </div>
  </section>
</template>
