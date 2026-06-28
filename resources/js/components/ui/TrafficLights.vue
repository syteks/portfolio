<script setup>
/**
 * The three "traffic light" window-control dots. `tone` picks the palette:
 * `theme` blends with the Tokyo-Night UI, `mac` mimics a real macOS terminal
 * (used by the boot intro's fake desktop). Full class strings are listed so
 * Tailwind's scanner keeps them.
 */
defineProps({
  tone: {
    type: String,
    default: 'theme',
    validator: (value) => ['theme', 'mac'].includes(value),
  },
});

const palettes = {
  theme: ['bg-rose-500/90', 'bg-amber-400/90', 'bg-emerald-400/90'],
  mac: ['bg-[#ff5f56]', 'bg-[#ffbd2e]', 'bg-[#27c93f]'],
};
</script>

<template>
  <span class="flex items-center gap-2" aria-hidden="true">
    <span
      v-for="dotClass in palettes[tone]"
      :key="dotClass"
      class="h-3 w-3 rounded-full"
      :class="dotClass"
    />
  </span>
</template>
