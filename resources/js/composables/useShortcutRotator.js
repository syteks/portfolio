import { ref, computed, onMounted, onBeforeUnmount } from 'vue';

/**
 * The command-palette hotkey listens for BOTH Cmd+K (macOS) and Ctrl+K
 * (Windows/Linux). Rather than guess the platform, the hint *rotates* between
 * the two labels so it reads correctly to every visitor.
 */
export const shortcutLabels = ['Ctrl K', '⌘K'];

/**
 * Reactive label cycling through shortcutLabels on an interval. Respects
 * prefers-reduced-motion (stays on the first, neutral "Ctrl K" label).
 *
 * @param {number} intervalMs
 */
export function useShortcutRotator(intervalMs = 2600) {
  const labelIndex = ref(0);
  let timer = null;

  onMounted(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => {
      labelIndex.value = (labelIndex.value + 1) % shortcutLabels.length;
    }, intervalMs);
  });

  onBeforeUnmount(() => clearInterval(timer));

  const shortcutLabel = computed(() => shortcutLabels[labelIndex.value]);

  return { shortcutLabel, labelIndex, shortcutLabels };
}
