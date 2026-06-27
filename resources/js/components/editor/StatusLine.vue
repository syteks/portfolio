<script setup>
import { computed } from 'vue';
import { useEditor } from '@/composables/useEditor';
import { useLocale } from '@/composables/useLocale';
import { getBadge } from '@/data/editorFiles';

const { editorState, activeFile } = useEditor();
const { locale, toggleLocale } = useLocale();

const modeColor = computed(() => {
  switch (editorState.mode) {
    case 'INSERT':
      return 'bg-[#9ece6a] text-[#16161e]';
    case 'SEARCH':
      return 'bg-[#bb9af7] text-[#16161e]';
    default:
      return 'bg-[#7aa2f7] text-[#16161e]';
  }
});
</script>

<template>
  <div class="flex h-7 items-stretch bg-[#16161e] font-mono text-xs text-[#787c99]">
    <!-- mode -->
    <span class="flex items-center px-3 font-bold" :class="modeColor">
      {{ editorState.mode }}
    </span>

    <!-- git branch -->
    <span class="hidden items-center gap-1 bg-[#292e42] px-3 text-[#c0caf5] min-[420px]:flex">
      <span class="text-[#bb9af7]">⎇</span> main
    </span>

    <!-- file -->
    <span class="flex min-w-0 items-center truncate px-3">{{ activeFile().name }}</span>

    <span class="flex-1" />

    <!-- language toggle (en ⇄ fr) -->
    <button
      type="button"
      class="flex shrink-0 items-center gap-1.5 px-3 transition-colors hover:bg-[#292e42] hover:text-[#c0caf5] active:bg-[#292e42] active:text-[#c0caf5]"
      :title="`Language: ${locale === 'fr' ? 'Français' : 'English'} — click to switch`"
      :aria-label="`Switch language (current: ${locale.toUpperCase()})`"
      @click="toggleLocale"
    >
      <span class="text-[#7dcfff]">⇄</span>
      <span :class="locale === 'en' ? 'font-bold text-[#c0caf5]' : ''">en</span>
      <span class="text-[#3b4261]">/</span>
      <span :class="locale === 'fr' ? 'font-bold text-[#c0caf5]' : ''">fr</span>
    </button>

    <!-- filetype -->
    <span class="hidden items-center px-3 sm:flex" :class="getBadge(activeFile().type).color">
      {{ activeFile().type }}
    </span>

    <!-- cursor pos -->
    <span class="hidden items-center bg-[#292e42] px-3 text-[#c0caf5] min-[420px]:flex">
      {{ editorState.cursorLine }}:{{ editorState.cursorColumn }}
    </span>

    <!-- scroll percent -->
    <span class="flex items-center px-3" :class="modeColor">
      {{ editorState.scrollPercent }}%
    </span>
  </div>
</template>
