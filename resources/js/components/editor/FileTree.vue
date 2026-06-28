<script setup>
import { editorFiles, getBadge } from '@/data/editorFiles';
import { useEditor } from '@/composables/useEditor';
import { useShortcutRotator } from '@/composables/useShortcutRotator';

const emit = defineEmits(['navigate']);

const { shortcutLabel } = useShortcutRotator();
const { editorState, goToFile } = useEditor();

const openFile = (file) => {
  goToFile(file);
  emit('navigate'); // collapse the tree on mobile after picking a file
};
</script>

<template>
  <nav class="flex h-full flex-col bg-[#16161e] font-mono text-sm">
    <div class="flex items-center gap-2 border-b border-white/5 px-3 py-2 text-xs uppercase tracking-wide text-[#565f89]">
      <span>explorer</span>
    </div>

    <div class="px-2 py-2">
      <p class="flex items-center gap-1 px-2 py-1 text-[#7aa2f7]">
        <span class="text-[#565f89]">▾</span> ~/sergiu
      </p>

      <ul class="mt-1">
        <li v-for="file in editorFiles" :key="file.id">
          <button
            type="button"
            class="flex w-full items-center gap-2 rounded-sm border-l-2 px-2 py-1 pl-5 text-left transition-colors"
            :class="
              editorState.activeFileId === file.id
                ? 'border-[#7aa2f7] bg-[#292e42] text-[#c0caf5]'
                : 'border-transparent text-[#787c99] hover:bg-[#1f2335] hover:text-[#c0caf5]'
            "
            @click="openFile(file)"
          >
            <span class="w-6 shrink-0 text-center text-xs" :class="getBadge(file.type).color">
              {{ getBadge(file.type).tag }}
            </span>
            <span class="truncate">{{ file.name }}</span>
          </button>
        </li>
      </ul>
    </div>

    <div class="mt-auto border-t border-white/5 px-3 py-2 text-xs text-[#565f89]">
      <span class="text-[#9ece6a]"></span> press
      <transition name="decl" mode="out-in">
        <span :key="shortcutLabel" class="inline-block text-[#e0af68]">{{ shortcutLabel }}</span>
      </transition>
      to search
    </div>
  </nav>
</template>
