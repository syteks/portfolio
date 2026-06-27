<script setup>
import { ref, computed, watch, nextTick } from 'vue';
import { editorFiles, getBadge } from '@/data/editorFiles';
import { useEditor } from '@/composables/useEditor';

const { editorState, setActiveFile, closePalette } = useEditor();

const query = ref('');
const selectedIndex = ref(0);
const inputRef = ref(null);

const previews = {
  home: 'whoami — intro & summary',
  about: 'my journey into engineering',
  skills: 'languages, frameworks, tools, AI',
  experience: 'work history & tech stacks',
  profile: 'education, languages, details',
  contact: 'get in touch',
};

const results = computed(() => {
  const term = query.value.trim().toLowerCase();
  if (!term) return editorFiles;
  return editorFiles.filter((file) => file.name.toLowerCase().includes(term) || file.id.includes(term));
});

const open = (file) => {
  if (!file) return;
  setActiveFile(file.id);
  closePalette();
  document.getElementById(file.section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

const moveSelection = (delta) => {
  const count = results.value.length;
  if (!count) return;
  selectedIndex.value = (selectedIndex.value + delta + count) % count;
};

watch(
  () => editorState.isPaletteOpen,
  async (isOpen) => {
    if (isOpen) {
      query.value = '';
      selectedIndex.value = 0;
      await nextTick();
      inputRef.value?.focus();
    }
  },
);

watch(results, () => {
  selectedIndex.value = 0;
});
</script>

<template>
  <transition
    enter-active-class="transition duration-150 ease-out"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition duration-100 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="editorState.isPaletteOpen"
      class="fixed inset-0 z-[80] flex items-start justify-center bg-black/60 px-4 pt-[12vh] backdrop-blur-sm"
      @click.self="closePalette"
      @keydown.esc="closePalette"
      @keydown.down.prevent="moveSelection(1)"
      @keydown.up.prevent="moveSelection(-1)"
      @keydown.enter.prevent="open(results[selectedIndex])"
    >
      <div class="w-full max-w-2xl overflow-hidden rounded-lg border border-[#3b4261] bg-[#1a1b26] shadow-2xl shadow-black/60">
        <!-- prompt -->
        <div class="flex items-center gap-2 border-b border-[#3b4261] px-4 py-3 font-mono text-sm">
          <span class="text-[#bb9af7]">/</span>
          <input
            ref="inputRef"
            v-model="query"
            type="text"
            placeholder="Find a file…"
            class="w-full bg-transparent text-[#c0caf5] placeholder-[#565f89] outline-none"
          />
          <span class="rounded border border-[#3b4261] px-1.5 py-0.5 text-[10px] text-[#565f89]">esc</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-[1fr_1fr]">
          <!-- results -->
          <ul class="max-h-72 overflow-y-auto py-2 font-mono text-sm">
            <li v-for="(file, index) in results" :key="file.id">
              <button
                type="button"
                class="flex w-full items-center gap-2 border-l-2 px-4 py-2 text-left"
                :class="
                  index === selectedIndex
                    ? 'border-[#bb9af7] bg-[#292e42] text-[#c0caf5]'
                    : 'border-transparent text-[#787c99] hover:bg-[#1f2335]'
                "
                @mouseenter="selectedIndex = index"
                @click="open(file)"
              >
                <span class="w-6 text-center text-xs" :class="getBadge(file.type).color">{{ getBadge(file.type).tag }}</span>
                <span>{{ file.name }}</span>
              </button>
            </li>
            <li v-if="!results.length" class="px-4 py-2 font-mono text-sm text-[#565f89]">
              no matches
            </li>
          </ul>

          <!-- preview -->
          <div class="hidden border-l border-[#3b4261] p-4 font-mono text-xs text-[#787c99] sm:block">
            <p class="mb-2 text-[#7aa2f7]">{{ results[selectedIndex]?.name }}</p>
            <p>{{ previews[results[selectedIndex]?.id] }}</p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
