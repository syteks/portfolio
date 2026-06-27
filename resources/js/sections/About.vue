<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { profile } from '@/data/profile';
import { getIcon } from '@/data/icons';
import { useSequentialHighlight } from '@/composables/useSequentialHighlight';
import Section from '@components/ui/Section.vue';

const { t, tm, rt } = useI18n({ useScope: 'global' });

const pad = (n) => String(n + 1).padStart(2, '0');

// Zip the translatable journey prose with the structural icon list (same order).
const journey = computed(() =>
  tm('about.journey').map((step, index) => ({
    icon: profile.journey[index]?.icon,
    title: rt(step.title),
    era: rt(step.era),
    description: rt(step.description),
    tags: (step.tags ?? []).map(rt),
  })),
);

// Cycled per step. Full class strings (not interpolated) so Tailwind keeps them.
const accents = [
  {
    text: 'text-[#7aa2f7]', border: 'border-[#7aa2f7]/50', bg: 'bg-[#7aa2f7]/10',
    activeCard: 'border-[#7aa2f7]/70 shadow-[0_0_34px_-6px_#7aa2f7]',
    activeNode: 'shadow-[0_0_22px_-3px_#7aa2f7]',
    hoverCard: 'group-hover:border-[#7aa2f7]/70 group-hover:shadow-[0_0_34px_-6px_#7aa2f7] group-hover:bg-[#1f2335]',
    hoverNode: 'group-hover:shadow-[0_0_22px_-3px_#7aa2f7] group-hover:scale-110',
  },
  {
    text: 'text-[#7dcfff]', border: 'border-[#7dcfff]/50', bg: 'bg-[#7dcfff]/10',
    activeCard: 'border-[#7dcfff]/70 shadow-[0_0_34px_-6px_#7dcfff]',
    activeNode: 'shadow-[0_0_22px_-3px_#7dcfff]',
    hoverCard: 'group-hover:border-[#7dcfff]/70 group-hover:shadow-[0_0_34px_-6px_#7dcfff] group-hover:bg-[#1f2335]',
    hoverNode: 'group-hover:shadow-[0_0_22px_-3px_#7dcfff] group-hover:scale-110',
  },
  {
    text: 'text-[#bb9af7]', border: 'border-[#bb9af7]/50', bg: 'bg-[#bb9af7]/10',
    activeCard: 'border-[#bb9af7]/70 shadow-[0_0_34px_-6px_#bb9af7]',
    activeNode: 'shadow-[0_0_22px_-3px_#bb9af7]',
    hoverCard: 'group-hover:border-[#bb9af7]/70 group-hover:shadow-[0_0_34px_-6px_#bb9af7] group-hover:bg-[#1f2335]',
    hoverNode: 'group-hover:shadow-[0_0_22px_-3px_#bb9af7] group-hover:scale-110',
  },
  {
    text: 'text-[#9ece6a]', border: 'border-[#9ece6a]/50', bg: 'bg-[#9ece6a]/10',
    activeCard: 'border-[#9ece6a]/70 shadow-[0_0_34px_-6px_#9ece6a]',
    activeNode: 'shadow-[0_0_22px_-3px_#9ece6a]',
    hoverCard: 'group-hover:border-[#9ece6a]/70 group-hover:shadow-[0_0_34px_-6px_#9ece6a] group-hover:bg-[#1f2335]',
    hoverNode: 'group-hover:shadow-[0_0_22px_-3px_#9ece6a] group-hover:scale-110',
  },
];
const accentFor = (index) => accents[index % accents.length];

const { target, registerItem, isRevealed, isHighlighted } = useSequentialHighlight(
  profile.journey.length,
  { stepMs: 650 },
);
</script>

<template>
  <Section id="about" file="about.md" :title="t('sections.about')">
    <p v-reveal class="mb-12 max-w-2xl font-mono text-sm leading-relaxed text-[#9aa5ce]">
      <span class="text-[#565f89]">/*</span> {{ t('about.intro') }}
      <span class="text-[#565f89]">*/</span>
    </p>

    <div ref="target" class="relative">
      <!-- the spine -->
      <span
        class="pointer-events-none absolute left-[21px] top-3 bottom-3 w-px bg-gradient-to-b from-[#7aa2f7] via-[#bb9af7] to-[#9ece6a] opacity-40"
      />

      <div class="space-y-6">
        <article
          v-for="(step, index) in journey"
          :key="step.title"
          :ref="(el) => registerItem(el?.$el ?? el, index)"
          class="journey-item group relative pl-16"
          :class="{ 'is-revealed': isRevealed(index) }"
        >
          <!-- node on the spine -->
          <span
            class="absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-xl border bg-[#16161e] transition-all duration-200"
            :class="[
              accentFor(index).border,
              accentFor(index).text,
              accentFor(index).hoverNode,
              isHighlighted(index) ? `${accentFor(index).activeNode} scale-110` : '',
            ]"
          >
            <component :is="getIcon(step.icon)" class="h-5 w-5" />
          </span>

          <!-- card -->
          <div
            class="journey-card rounded-xl border bg-[#1f2335]/60 p-5 group-hover:scale-[1.02]"
            :class="[
              accentFor(index).hoverCard,
              isHighlighted(index)
                ? `${accentFor(index).activeCard} scale-[1.02] bg-[#1f2335]`
                : 'border-white/10',
            ]"
          >
            <header class="mb-2 flex items-start justify-between gap-3">
              <div>
                <span
                  class="mb-1 inline-block rounded-md px-2 py-0.5 font-mono text-[11px] tracking-wide"
                  :class="[accentFor(index).bg, accentFor(index).text]"
                >
                  {{ step.era }}
                </span>
                <h3 class="font-mono text-lg font-semibold text-[#c0caf5]">{{ step.title }}</h3>
              </div>
              <span class="shrink-0 font-mono text-xs text-[#565f89]">// {{ pad(index) }}</span>
            </header>

            <p class="text-sm leading-relaxed text-[#a9b1d6]">{{ step.description }}</p>

            <ul v-if="step.tags?.length" class="mt-4 flex flex-wrap gap-2">
              <li
                v-for="tag in step.tags"
                :key="tag"
                class="rounded-md border border-white/5 bg-white/[0.03] px-2 py-1 font-mono text-[11px] text-[#7aa2f7]"
              >
                <span class="text-[#565f89]">#</span>{{ tag }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </Section>
</template>
