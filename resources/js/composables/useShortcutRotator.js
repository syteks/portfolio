import { computed } from 'vue';
import { useRotatingIndex } from '@/composables/useRotatingIndex';

/**
 * The command-palette hotkey listens for BOTH Cmd+K (macOS) and Ctrl+K
 * (Windows/Linux). Rather than guess the platform, the hint *rotates* between
 * the two labels so it reads correctly to every visitor.
 */
const shortcutLabels = ['Ctrl K', '⌘K'];

/**
 * Reactive label cycling through shortcutLabels on an interval. Respects
 * prefers-reduced-motion (stays on the first, neutral "Ctrl K" label).
 *
 * @param {number} intervalMs
 */
export function useShortcutRotator(intervalMs = 2600) {
  const { index } = useRotatingIndex(shortcutLabels.length, intervalMs);
  const shortcutLabel = computed(() => shortcutLabels[index.value]);

  return { shortcutLabel };
}
