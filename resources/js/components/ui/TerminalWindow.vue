<script setup>
import TrafficLights from '@components/ui/TrafficLights.vue';

/**
 * A code-editor / terminal "window": title bar with traffic-light dots and a
 * file label, plus a body slot. The generic surface used across sections.
 */
defineProps({
  title: { type: String, default: null },
});
</script>

<template>
  <div
    class="overflow-hidden rounded-xl border border-white/10 bg-[#1f2335]/70 shadow-2xl shadow-black/40 backdrop-blur-sm"
  >
    <div class="flex items-center gap-2 border-b border-white/10 bg-[#16161e]/70 px-4 py-3">
      <TrafficLights />
      <span v-if="title" class="ml-3 truncate font-mono text-xs text-[#565f89]">
        {{ title }}
      </span>
      <div class="ml-auto">
        <slot name="actions" />
      </div>
    </div>
    <div class="p-5 sm:p-6">
      <slot />
    </div>
  </div>
</template>
