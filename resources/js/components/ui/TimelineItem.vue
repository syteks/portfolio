<script setup>
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useLocale } from '@/composables/useLocale';
import { formatMonthYear, formatDuration } from '@/utils/dates';

/**
 * A single role entry on the experience timeline.
 */
const props = defineProps({
  role: { type: Object, required: true },
});

const { t } = useI18n({ useScope: 'global' });
const { locale } = useLocale();

const isCurrent = computed(() => props.role.date.end == null);

const dateRange = computed(() => {
  const start = formatMonthYear(props.role.date.start, locale.value);
  const end = formatMonthYear(props.role.date.end, locale.value) ?? t('experience.present');
  return `${start} — ${end}`;
});

const duration = computed(() =>
  formatDuration(props.role.date.start, props.role.date.end, locale.value),
);
</script>

<template>
  <div class="group relative pl-8">
    <!-- node (pulses while this role is the current one) -->
    <span
      class="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-[#16161e] bg-[#9ece6a]"
    >
      <span
        v-if="isCurrent"
        class="absolute inset-0 animate-ping rounded-full bg-[#9ece6a]/70"
      />
    </span>

    <div class="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
      <h4 class="font-mono text-base font-semibold text-[#c0caf5] sm:text-lg">
        {{ role.title }}
      </h4>
      <span
        class="flex items-center gap-1.5 font-mono text-xs text-[#9ece6a]"
      >
        <span v-if="isCurrent" class="h-1.5 w-1.5 rounded-full bg-[#9ece6a]" />
        {{ duration }}
      </span>
    </div>
    <p class="mb-3 font-mono text-xs text-[#565f89]">{{ dateRange }}</p>
    <p class="mb-3 text-sm leading-relaxed text-[#a9b1d6]">{{ role.description }}</p>
    <ul v-if="role.responsibilities" class="space-y-1.5 text-sm text-[#9aa5ce]">
      <li v-for="item in role.responsibilities" :key="item" class="flex gap-2">
        <span class="select-none text-[#9ece6a]/70">▹</span>
        <span>{{ item }}</span>
      </li>
    </ul>
  </div>
</template>
