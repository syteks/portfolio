<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { profile } from '@/data/profile';
import { yearsSince } from '@/utils/dates';
import { useTypewriter } from '@/composables/useTypewriter';
import TerminalWindow from '@components/ui/TerminalWindow.vue';
import CommandLine from '@components/ui/CommandLine.vue';
import BlinkingCursor from '@components/ui/BlinkingCursor.vue';
import SocialLinks from '@components/ui/SocialLinks.vue';

const { t, tm, rt } = useI18n({ useScope: 'global' });

const roles = computed(() => tm('hero.roles').map(rt));
const { text: typedRole } = useTypewriter(() => roles.value);
const years = yearsSince(profile.experienceSince);
</script>

<template>
  <section
    id="home"
    class="flex min-h-dvh w-full snap-start items-center justify-center px-4 py-24 sm:px-6 lg:px-8"
  >
    <div class="mx-auto w-full max-w-5xl" v-reveal>
      <TerminalWindow :title="`${profile.handle}@${profile.host}: ~`">
        <div class="grid items-center gap-8 md:grid-cols-[auto_1fr] md:gap-10">
          <!-- Avatar -->
          <div class="mx-auto md:mx-0">
            <div class="rounded-2xl border border-emerald-400/40 p-1.5 shadow-lg shadow-emerald-500/10">
              <img
                :src="profile.avatar"
                :alt="profile.name"
                width="315"
                height="560"
                class="h-auto w-40 rounded-xl object-contain sm:w-44"
              />
            </div>
          </div>

          <!-- Identity -->
          <div class="text-center md:text-left">
            <CommandLine command="whoami" class="justify-center md:justify-start" />

            <h1 class="mt-3 font-mono text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {{ profile.name }}
            </h1>

            <p class="mt-3 font-mono text-lg text-slate-300 sm:text-2xl">
              <span class="text-emerald-400">&gt; </span>
              <span>{{ typedRole }}</span>
              <BlinkingCursor class="text-emerald-400" />
            </p>

            <p class="mx-auto mt-5 max-w-xl font-mono text-sm leading-relaxed text-slate-400 md:mx-0">
              <span class="text-slate-600">// </span>{{ t('hero.bio') }}
            </p>

            <!-- Stats -->
            <div class="mt-6 flex items-center justify-center gap-6 md:justify-start">
              <div class="flex items-baseline gap-2">
                <span class="font-mono text-2xl font-bold text-emerald-400">{{ years }}+</span>
                <span class="font-mono text-xs text-slate-400">{{ t('hero.years') }}<br />{{ t('hero.experience') }}</span>
              </div>
              <div class="h-8 w-px bg-white/10" />
              <SocialLinks :size="20" />
            </div>

            <!-- Actions -->
            <div class="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <a
                href="#about"
                class="rounded-lg border border-emerald-400/60 bg-emerald-400/10 px-4 py-2 font-mono text-sm text-emerald-300 transition-colors duration-300 hover:bg-emerald-400/20 active:bg-emerald-400/30"
              >
                cat about.md
              </a>
              <a
                href="#contact"
                class="rounded-lg border border-white/10 px-4 py-2 font-mono text-sm text-slate-300 transition-colors duration-300 hover:border-white/30 hover:text-white active:border-white/30 active:text-white"
              >
                ./contact.sh
              </a>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </div>
  </section>
</template>
