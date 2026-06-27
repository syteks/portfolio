<script setup>
import { socials } from '@/data/socials';

/**
 * Renders the configured social links.
 * `labelled` switches from icon-only buttons to icon + label pills.
 */
const props = defineProps({
  size: { type: Number, default: 20 },
  labelled: { type: Boolean, default: false },
});
</script>

<template>
  <ul class="flex flex-wrap items-center gap-3">
    <li v-for="social in socials" :key="social.label">
      <a
        :href="social.href"
        :title="social.label"
        :aria-label="social.label"
        target="_blank"
        rel="noopener noreferrer"
        class="group flex items-center gap-2 rounded-lg border border-white/[0.08] bg-[#1f2335]/50 text-[#a9b1d6] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9ece6a]/60 hover:text-[#9ece6a] hover:shadow-lg hover:shadow-[#9ece6a]/10 active:-translate-y-0.5 active:border-[#9ece6a]/60 active:text-[#9ece6a]"
        :class="props.labelled ? 'px-4 py-2.5' : 'p-2.5'"
      >
        <component
          :is="social.icon"
          :width="`${props.size}px`"
          :height="`${props.size}px`"
        />
        <span v-if="props.labelled" class="font-mono text-sm">{{ social.label }}</span>
      </a>
    </li>
  </ul>
</template>
