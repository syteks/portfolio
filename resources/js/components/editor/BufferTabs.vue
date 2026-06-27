<script setup>
import { editorFiles, getBadge } from '@/data/editorFiles';
import { useEditor } from '@/composables/useEditor';

const { editorState, setActiveFile } = useEditor();

const openFile = (file) => {
  setActiveFile(file.id);
  document.getElementById(file.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
</script>

<template>
  <div class="flex h-9 items-stretch overflow-x-auto bg-[#16161e] font-mono text-xs scrollbar-hide">
    <button
      v-for="file in editorFiles"
      :key="file.id"
      type="button"
      class="flex shrink-0 items-center gap-2 border-r border-black/30 px-3 transition-colors"
      :class="
        editorState.activeFileId === file.id
          ? 'bg-[#1a1b26] text-[#c0caf5]'
          : 'bg-[#16161e] text-[#565f89] hover:text-[#c0caf5]'
      "
      @click="openFile(file)"
    >
      <span :class="getBadge(file.type).color">{{ getBadge(file.type).tag }}</span>
      <span>{{ file.name }}</span>
      <span
        class="ml-1 h-1.5 w-1.5 rounded-full"
        :class="editorState.activeFileId === file.id ? 'bg-[#7aa2f7]' : 'bg-transparent'"
      />
    </button>
  </div>
</template>
