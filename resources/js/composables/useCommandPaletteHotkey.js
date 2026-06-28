import { onMounted, onBeforeUnmount } from 'vue';
import { useEditor } from '@/composables/useEditor';

const EDITABLE_TAGS = ['INPUT', 'TEXTAREA'];

/**
 * Global keyboard shortcuts for the command palette: Cmd/Ctrl+K or `/` opens it
 * (the latter only when not typing in a field), Escape closes it.
 */
export function useCommandPaletteHotkey() {
  const { editorState, openPalette, closePalette } = useEditor();

  const isPaletteShortcut = (event) =>
    (event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k';

  const isSlashSearch = (event) =>
    event.key === '/' &&
    !EDITABLE_TAGS.includes(event.target.tagName) &&
    !editorState.isPaletteOpen;

  const onKeydown = (event) => {
    if (isPaletteShortcut(event) || isSlashSearch(event)) {
      event.preventDefault();
      openPalette();
    } else if (event.key === 'Escape') {
      closePalette();
    }
  };

  onMounted(() => window.addEventListener('keydown', onKeydown));
  onBeforeUnmount(() => window.removeEventListener('keydown', onKeydown));
}
