import { ref, onMounted, onBeforeUnmount } from 'vue';
import { prefersReducedMotion } from '@/utils/media';

/**
 * Advances a reactive index `0 → length-1 → 0 …` on a fixed interval. Used by
 * any "cycle through a list of labels/styles" effect. Stays on index 0 when the
 * user prefers reduced motion, and cleans up its timer on unmount.
 *
 * @param {number} length      number of items to cycle through
 * @param {number} intervalMs  delay between steps
 * @returns {{ index: import('vue').Ref<number> }}
 */
export function useRotatingIndex(length, intervalMs) {
  const index = ref(0);
  let timer = null;

  onMounted(() => {
    if (length <= 1 || prefersReducedMotion()) return;
    timer = setInterval(() => {
      index.value = (index.value + 1) % length;
    }, intervalMs);
  });

  onBeforeUnmount(() => clearInterval(timer));

  return { index };
}
