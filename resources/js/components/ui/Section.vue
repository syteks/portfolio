<script setup>
import BlinkingCursor from '@components/ui/BlinkingCursor.vue';
import { useTypeOnReveal } from '@/composables/useTypeOnReveal';

/**
 * A section rendered as an editor "buffer": a filename comment + an aligned
 * line-number gutter heading, then the content body. Used by most sections.
 */
const props = defineProps({
  id: { type: String, required: true },
  file: { type: String, required: true },
  title: { type: String, default: null },
});

// The heading "types itself" the first time the section scrolls into view, and
// re-types if the title changes (e.g. the locale switches).
const { target, typed } = useTypeOnReveal(() => props.title ?? '');
</script>

<template>
  <section :id="id" class="min-h-screen w-full px-4 py-16 sm:px-6 lg:px-10">
    <div class="mx-auto max-w-6xl">
      <header ref="target" v-reveal class="mb-10 font-mono sm:mb-14">
        <div class="flex items-baseline gap-4">
          <span class="w-6 select-none text-right text-sm text-[#3b4261]">1</span>
          <span class="text-sm text-[#565f89]">// {{ file }}</span>
        </div>
        <div class="flex items-baseline gap-4">
          <span class="w-6 select-none text-right text-sm text-[#3b4261]">2</span>
          <h2 v-if="title" class="text-2xl font-bold text-[#c0caf5] sm:text-3xl">
            <span class="text-[#bb9af7]">#</span> {{ typed }}<BlinkingCursor class="text-[#7aa2f7]" />
          </h2>
        </div>
        <div class="flex items-baseline gap-4">
          <span class="w-6 select-none text-right text-sm text-[#3b4261]">3</span>
          <span>&nbsp;</span>
        </div>
      </header>

      <div class="sm:pl-10">
        <slot />
      </div>
    </div>
  </section>
</template>
