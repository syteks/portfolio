<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { editorFiles } from '@/data/editorFiles';
import { useEditor } from '@/composables/useEditor';
import { useShortcutRotator } from '@/composables/useShortcutRotator';
import FileTree from '@components/editor/FileTree.vue';
import BufferTabs from '@components/editor/BufferTabs.vue';
import StatusLine from '@components/editor/StatusLine.vue';
import CommandPalette from '@components/editor/CommandPalette.vue';

const { editorState, setActiveFile, openPalette, closePalette } = useEditor();
const { shortcutLabel } = useShortcutRotator();

const scrollRef = ref(null);
const isTreeOpen = ref(false); // mobile drawer

const handleScroll = () => {
  const container = scrollRef.value;
  if (!container) return;

  const max = container.scrollHeight - container.clientHeight;
  const percent = max > 0 ? container.scrollTop / max : 0;
  editorState.scrollPercent = Math.round(percent * 100);

  // Fake-but-lively cursor position derived from scroll.
  editorState.cursorLine = 1 + Math.round(percent * 240);
  editorState.cursorColumn = 1 + Math.round((container.scrollTop % 80) / 2);

  // Scroll-spy: the active file is the last section whose top passed the fold.
  const probe = container.scrollTop + container.clientHeight * 0.3;
  let current = editorFiles[0];
  for (const file of editorFiles) {
    const element = document.getElementById(file.section);
    if (element && element.offsetTop <= probe) current = file;
  }
  if (current.id !== editorState.activeFileId) setActiveFile(current.id);
};

const onKeydown = (event) => {
  const isPaletteHotkey = (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';
  const typingInField = ['INPUT', 'TEXTAREA'].includes(event.target.tagName);

  if (isPaletteHotkey || (event.key === '/' && !typingInField && !editorState.isPaletteOpen)) {
    event.preventDefault();
    openPalette();
  } else if (event.key === 'Escape') {
    closePalette();
  }
};

onMounted(() => {
  scrollRef.value?.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('keydown', onKeydown);
  handleScroll();
});

onBeforeUnmount(() => {
  scrollRef.value?.removeEventListener('scroll', handleScroll);
  window.removeEventListener('keydown', onKeydown);
});
</script>

<template>
  <div class="relative flex h-screen flex-col overflow-hidden bg-[#1a1b26] text-[#c0caf5]">
    <!-- scroll/build progress line -->
    <div class="pointer-events-none absolute inset-x-0 top-0 z-[70] h-0.5 bg-white/5">
      <div
        class="h-full bg-gradient-to-r from-[#7aa2f7] via-[#7dcfff] to-[#bb9af7] transition-[width] duration-150 ease-out"
        :style="{ width: `${editorState.scrollPercent}%` }"
      />
    </div>

    <!-- top bar: mobile menu + buffer tabs + palette trigger -->
    <div class="flex items-stretch border-b border-black/40">
      <button
        type="button"
        class="flex w-10 shrink-0 items-center justify-center text-[#787c99] hover:text-[#c0caf5] sm:hidden"
        aria-label="Toggle file tree"
        @click="isTreeOpen = !isTreeOpen"
      >
        ≡
      </button>
      <BufferTabs class="flex-1" />
      <button
        type="button"
        class="hidden shrink-0 items-center gap-1 border-l border-black/40 bg-[#16161e] px-3 font-mono text-xs text-[#565f89] hover:text-[#c0caf5] sm:flex"
        @click="openPalette"
      >
        <span class="text-[#bb9af7]">/</span> search
        <span class="ml-1 inline-flex justify-center rounded border border-[#3b4261] px-1 py-0.5 text-[10px]">
          <transition name="decl" mode="out-in">
            <span :key="shortcutLabel">{{ shortcutLabel }}</span>
          </transition>
        </span>
      </button>
    </div>

    <div class="flex min-h-0 flex-1">
      <!-- desktop file tree -->
      <aside class="hidden w-56 shrink-0 border-r border-black/40 lg:block">
        <FileTree />
      </aside>

      <!-- mobile file tree drawer -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="-translate-x-full"
        enter-to-class="translate-x-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-x-0"
        leave-to-class="-translate-x-full"
      >
        <aside
          v-if="isTreeOpen"
          class="fixed inset-y-0 left-0 z-50 w-64 border-r border-black/40 lg:hidden"
        >
          <FileTree @navigate="isTreeOpen = false" />
        </aside>
      </transition>
      <div
        v-if="isTreeOpen"
        class="fixed inset-0 z-40 bg-black/50 lg:hidden"
        @click="isTreeOpen = false"
      />

      <!-- editor area (scrolls) -->
      <main ref="scrollRef" class="relative flex-1 overflow-y-auto scroll-smooth">
        <slot />
      </main>
    </div>

    <StatusLine />
    <CommandPalette />
  </div>
</template>
