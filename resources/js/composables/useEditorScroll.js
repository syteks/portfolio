import { onMounted, onBeforeUnmount } from 'vue';
import { editorFiles } from '@/data/editorFiles';
import { useEditor } from '@/composables/useEditor';

/**
 * Drives the editor chrome from the scroll position of the content area:
 *   - the build-progress bar + status-line percentage,
 *   - a "fake but lively" cursor position, and
 *   - scroll-spy that marks the active file/section.
 *
 * Performance notes (this runs while the user scrolls, so it must be cheap):
 *   - Scroll events are coalesced into a single update per animation frame.
 *   - Section offsets are measured once and cached; they are only re-measured
 *     when the content height actually changes (async sections loading, a locale
 *     switch, a resize) — detected via `scrollHeight`, which we already read for
 *     the progress bar, so it costs no extra layout work in the common case.
 *   - Reactive state is written only when a value actually changes, so we don't
 *     trigger needless re-renders of the status line on every frame.
 *
 * @param {import('vue').Ref<HTMLElement|null>} scrollContainer
 */
const FAKE_CURSOR_MAX_LINE = 240;
const FAKE_CURSOR_COLUMN_PERIOD = 80;
const ACTIVE_SECTION_FOLD_RATIO = 0.3; // how far down the viewport counts as "read"

export function useEditorScroll(scrollContainer) {
  const { editorState, setActiveFile } = useEditor();

  let sectionTops = []; // cached [{ id, top }], document order
  let lastMeasuredHeight = -1;
  let frameId = 0;

  const measureSectionTops = () => {
    sectionTops = editorFiles
      .map((file) => {
        const element = document.getElementById(file.section);
        return element ? { id: file.id, top: element.offsetTop } : null;
      })
      .filter(Boolean);
  };

  const writeIfChanged = (key, value) => {
    if (editorState[key] !== value) editorState[key] = value;
  };

  const updateProgress = (container) => {
    const scrollableDistance = container.scrollHeight - container.clientHeight;
    const ratio = scrollableDistance > 0 ? container.scrollTop / scrollableDistance : 0;
    writeIfChanged('scrollPercent', Math.round(ratio * 100));
    return ratio;
  };

  const updateFakeCursor = (container, scrollRatio) => {
    writeIfChanged('cursorLine', 1 + Math.round(scrollRatio * FAKE_CURSOR_MAX_LINE));
    writeIfChanged('cursorColumn', 1 + Math.round((container.scrollTop % FAKE_CURSOR_COLUMN_PERIOD) / 2));
  };

  const updateActiveSection = (container) => {
    const fold = container.scrollTop + container.clientHeight * ACTIVE_SECTION_FOLD_RATIO;
    let activeId = sectionTops[0]?.id;
    for (const section of sectionTops) {
      if (section.top <= fold) activeId = section.id;
    }
    if (activeId && activeId !== editorState.activeFileId) setActiveFile(activeId);
  };

  const update = () => {
    frameId = 0;
    const container = scrollContainer.value;
    if (!container) return;

    if (container.scrollHeight !== lastMeasuredHeight) {
      lastMeasuredHeight = container.scrollHeight;
      measureSectionTops();
    }

    const scrollRatio = updateProgress(container);
    updateFakeCursor(container, scrollRatio);
    updateActiveSection(container);
  };

  const onScroll = () => {
    if (!frameId) frameId = requestAnimationFrame(update);
  };

  onMounted(() => {
    update();
    scrollContainer.value?.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    cancelAnimationFrame(frameId);
    scrollContainer.value?.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onScroll);
  });
}
