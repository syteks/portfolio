<script setup>
import { computed } from 'vue';
import { getSkillIcon } from '@/data/skillIcons';
import { getAccent } from '@/utils/accents';

/**
 * One skill tile: icon + name. Shared by the Skills and Experience sections.
 * Calm by default; on hover it lifts, the border picks up the category accent,
 * a soft accent glow appears and the icon nudges up in scale.
 */
const props = defineProps({
  name: { type: String, required: true },
  accent: { type: String, default: 'emerald' },
});

const icon = getSkillIcon(props.name);
const accentClasses = computed(() => getAccent(props.accent));
</script>

<template>
  <div
    class="group flex h-full flex-col items-center justify-center gap-2.5 rounded-xl border border-white/[0.06] bg-[#1f2335]/40 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-[#1f2335] active:-translate-y-1 active:bg-[#1f2335]"
    :class="[accentClasses.hoverBorder, accentClasses.hoverGlow, accentClasses.activeBorder, accentClasses.activeGlow]"
  >
    <component
      :is="icon"
      v-if="icon"
      class="h-10 w-10 shrink-0 object-contain transition-transform duration-300 ease-out group-hover:scale-110 group-active:scale-110"
    />
    <span
      class="truncate font-mono text-xs text-[#a9b1d6] transition-colors duration-300 group-hover:text-[#c0caf5] group-active:text-[#c0caf5] sm:text-sm"
    >
      {{ name }}
    </span>
  </div>
</template>
