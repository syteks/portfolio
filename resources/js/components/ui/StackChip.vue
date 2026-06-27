<script setup>
import { computed } from 'vue';
import { getSkillIcon } from '@/data/skillIcons';
import { getAccent } from '@/utils/accents';

/**
 * Compact tech-stack pill (icon + name) used in the Experience section so a
 * whole stack stays visible at a glance. Lifts and picks up the category accent
 * on hover.
 */
const props = defineProps({
  name: { type: String, required: true },
  accent: { type: String, default: 'emerald' },
});

const icon = getSkillIcon(props.name);
const accentClasses = computed(() => getAccent(props.accent));
</script>

<template>
  <span
    class="group inline-flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-[#1f2335]/50 px-2.5 py-1.5 font-mono text-xs text-[#a9b1d6] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1f2335] hover:text-[#c0caf5] active:-translate-y-0.5 active:bg-[#1f2335] active:text-[#c0caf5]"
    :class="[accentClasses.hoverBorder, accentClasses.hoverGlow, accentClasses.activeBorder, accentClasses.activeGlow]"
  >
    <component
      :is="icon"
      v-if="icon"
      class="h-4 w-4 shrink-0 object-contain transition-transform duration-200 group-hover:scale-110 group-active:scale-110"
    />
    {{ name }}
  </span>
</template>
