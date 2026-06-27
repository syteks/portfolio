import { reactive } from 'vue';
import { editorFiles } from '@/data/editorFiles';

/**
 * Shared editor state (module-level singleton) for the nvim theme: which file
 * is "open"/active, the modal mode shown in the status line, command-palette
 * visibility, cursor position, and scroll progress.
 */
const editorState = reactive({
  activeFileId: 'home',
  mode: 'NORMAL', // NORMAL | INSERT | SEARCH
  isPaletteOpen: false,
  cursorLine: 1,
  cursorColumn: 1,
  scrollPercent: 0,
});

const setActiveFile = (fileId) => {
  if (editorFiles.some((file) => file.id === fileId)) {
    editorState.activeFileId = fileId;
  }
};

const openPalette = () => {
  editorState.isPaletteOpen = true;
  editorState.mode = 'SEARCH';
};

const closePalette = () => {
  editorState.isPaletteOpen = false;
  editorState.mode = 'NORMAL';
};

const activeFile = () =>
  editorFiles.find((file) => file.id === editorState.activeFileId) ?? editorFiles[0];

export function useEditor() {
  return {
    editorState,
    setActiveFile,
    openPalette,
    closePalette,
    activeFile,
  };
}
