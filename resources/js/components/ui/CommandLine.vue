<script setup>
import { computed } from 'vue';
import { profile } from '@/data/profile';
import BlinkingCursor from '@components/ui/BlinkingCursor.vue';

/**
 * Renders a shell prompt line: `~/sergiu $ <command>` with an optional cursor.
 * Used as the heading for every section.
 */
const props = defineProps({
  command: { type: String, required: true },
  path: { type: String, default: null },
  showCursor: { type: Boolean, default: false },
});

const resolvedPath = computed(() => props.path ?? `~/${profile.handle}`);
</script>

<template>
  <p class="font-mono text-sm sm:text-base">
    <span class="text-[#9ece6a]">{{ resolvedPath }}</span>
    <span class="text-[#565f89]"> $ </span>
    <span class="text-[#c0caf5]">{{ command }}</span>
    <BlinkingCursor v-if="showCursor" class="text-[#9ece6a]" />
  </p>
</template>
