/**
 * `v-reveal` directive: animates an element in the first time it scrolls into
 * view (opacity + rise + de-blur — a "rendering/compiling" feel), then stops
 * observing it.
 *
 * Design notes:
 * - Only opacity/transform/filter are used for the hidden state; clip-path was
 *   removed because it skews IntersectionObserver's ratio and breaks reveals.
 * - Fail-safe: a timer reveals the element even if the observer never fires, so
 *   content can never get stuck invisible.
 * - prefers-reduced-motion / no IO support: element is left fully visible.
 *
 * Usage: <div v-reveal> or <div v-reveal="{ delay: '120ms', threshold: 0.1 }">
 */
import { prefersReducedMotion } from '@/utils/media';

export const vReveal = {
  mounted(el, binding) {
    if (typeof IntersectionObserver === 'undefined') {
      return; // leave content visible as-is
    }

    const reduce = prefersReducedMotion();
    const { delay, threshold } = binding.value ?? {};
    if (delay) el.style.setProperty('--reveal-delay', delay);
    // Reduced-motion users still get a plain opacity fade (no rise/blur, which
    // is what they're actually asking to avoid); everyone else gets the full
    // "compile" effect.
    el.classList.add(reduce ? 'reveal-soft' : 'reveal');

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add('reveal-visible');
      observer.disconnect();
      clearTimeout(failSafe);
    };

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && reveal()),
      { threshold: threshold ?? 0.08, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(el);

    // If the observer never fires (unusual scroll setups), reveal anyway.
    const failSafe = setTimeout(reveal, 1400);

    el._revealCleanup = () => {
      observer.disconnect();
      clearTimeout(failSafe);
    };
  },

  unmounted(el) {
    el._revealCleanup?.();
  },
};
