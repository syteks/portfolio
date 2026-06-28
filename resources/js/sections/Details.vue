<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { profile } from '@/data/profile';
import { education } from '@/data/education';
import Section from '@components/ui/Section.vue';
import TerminalWindow from '@components/ui/TerminalWindow.vue';
import PathHeading from '@components/ui/PathHeading.vue';

const { t } = useI18n({ useScope: 'global' });

// neofetch-style key/value rows for the whoami card. `label` is translated; the
// values are language-neutral identifiers.
const profileRows = computed(() => [
  { key: 'host', value: `${profile.handle}@${profile.host}` },
  { key: 'location', value: profile.location },
  { key: 'timezone', value: profile.timezone },
]);

// Proficiency meter: how many of 3 dots to fill per spoken-language level.
const levelMeter = (level) => {
  const map = { Native: 3, Good: 3, Intermediate: 2, Beginner: 1 };
  return map[level] ?? 1;
};
const levelColor = (level) =>
  level === 'Beginner' ? 'text-[#e0af68]' : 'text-[#9ece6a]';
</script>

<template>
  <Section id="profile" file="profile.yaml" :title="t('sections.profile')">
    <div class="grid gap-10 lg:grid-cols-2 lg:gap-12">
      <!-- Education -->
      <div>
        <PathHeading class="mb-6">{{ t('profile.headings.education') }}</PathHeading>
        <div class="relative space-y-6">
          <span class="pointer-events-none absolute bottom-2 left-[6px] top-2 w-px bg-white/10" />
          <article
            v-for="(entry, index) in education"
            :key="entry.id"
            v-reveal="{ delay: `${index * 100}ms` }"
            class="group relative pl-8"
          >
            <span
              class="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#16161e] bg-[#7dcfff] transition-transform duration-300 group-hover:scale-125 group-active:scale-125"
            />
            <div
              class="rounded-xl border border-white/[0.06] bg-[#1f2335]/40 p-4 transition-all duration-300 hover:border-[#7dcfff]/40 hover:bg-[#1f2335] active:border-[#7dcfff]/40 active:bg-[#1f2335]"
            >
              <h4 class="font-mono text-base font-semibold text-[#c0caf5]">
                <a
                  v-if="entry.link"
                  :href="entry.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="transition-colors hover:text-[#7dcfff]"
                >{{ entry.school }}</a>
                <template v-else>{{ entry.school }}</template>
              </h4>
              <p class="font-mono text-sm text-[#7dcfff]">{{ t(`education.schools.${entry.id}.credential`) }}</p>
              <p class="mb-2 font-mono text-xs text-[#565f89]">{{ t(`education.schools.${entry.id}.period`) }}</p>
              <p class="text-sm leading-relaxed text-[#a9b1d6]">
                {{ t(`education.schools.${entry.id}.description`) }}
              </p>
            </div>
          </article>
        </div>
      </div>

      <!-- Profile -->
      <div class="space-y-6">
        <!-- whoami card -->
        <div v-reveal>
          <TerminalWindow title="whoami">
            <dl class="grid grid-cols-[6rem_1fr] gap-x-3 gap-y-2.5 font-mono text-sm">
              <template v-for="row in profileRows" :key="row.key">
                <dt class="text-[#9ece6a]">{{ t(`profile.rows.${row.key}`) }}:</dt>
                <dd class="text-[#a9b1d6]">{{ row.value }}</dd>
              </template>
              <dt class="text-[#9ece6a]">{{ t('profile.rows.status') }}:</dt>
              <dd class="flex items-center gap-2 text-[#a9b1d6]">
                <span class="relative flex h-2 w-2">
                  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#9ece6a]/70" />
                  <span class="relative inline-flex h-2 w-2 rounded-full bg-[#9ece6a]" />
                </span>
                {{ t('profile.availability') }}
              </dd>
            </dl>
          </TerminalWindow>
        </div>

        <!-- languages -->
        <div v-reveal="{ delay: '80ms' }">
          <PathHeading class="mb-3">{{ t('profile.headings.languages') }}</PathHeading>
          <ul class="divide-y divide-white/[0.06] overflow-hidden rounded-xl border border-white/[0.06] bg-[#1f2335]/40">
            <li
              v-for="lang in profile.languages"
              :key="lang.key"
              class="flex items-center justify-between px-4 py-2.5 font-mono text-sm transition-colors hover:bg-[#1f2335] active:bg-[#1f2335]"
            >
              <span class="text-[#c0caf5]">{{ t(`profile.languageNames.${lang.key}`) }}</span>
              <span class="flex items-center gap-3">
                <span class="flex gap-1">
                  <span
                    v-for="dot in 3"
                    :key="dot"
                    class="h-1.5 w-1.5 rounded-full"
                    :class="dot <= levelMeter(lang.level) ? 'bg-[#9ece6a]' : 'bg-[#3b4261]'"
                  />
                </span>
                <span class="w-20 text-right text-xs" :class="levelColor(lang.level)">{{ t(`profile.levels.${lang.level}`) }}</span>
              </span>
            </li>
          </ul>
        </div>

        <!-- interests -->
        <div v-reveal="{ delay: '160ms' }">
          <PathHeading class="mb-3">{{ t('profile.headings.interests') }}</PathHeading>
          <div class="flex flex-wrap gap-2">
            <span
              v-for="interest in profile.interests"
              :key="interest.key"
              class="inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 font-mono text-sm transition-all duration-200 hover:-translate-y-0.5 active:-translate-y-0.5"
              :class="
                interest.main
                  ? 'border-[#9ece6a]/50 bg-[#9ece6a]/10 text-[#9ece6a] hover:shadow-lg hover:shadow-[#9ece6a]/15 active:shadow-lg active:shadow-[#9ece6a]/15'
                  : 'border-white/[0.06] bg-[#1f2335]/40 text-[#a9b1d6] hover:border-white/25 hover:text-[#c0caf5] active:border-white/25 active:text-[#c0caf5]'
              "
            >
              {{ t(`profile.interests.${interest.key}`) }}
              <span
                v-if="interest.main"
                class="rounded bg-[#9ece6a]/20 px-1.5 py-0.5 text-[10px] uppercase tracking-wide"
              >{{ t('profile.main') }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
