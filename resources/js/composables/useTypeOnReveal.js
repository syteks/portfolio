import { ref, watch, onMounted, onBeforeUnmount, toValue } from 'vue';

/**
 * Types `source` out one character at a time the first time the bound element
 * scrolls into view — like a command being typed at a terminal prompt. Stays
 * fully written afterwards (no looping / deleting).
 *
 * `source` may be a plain string, a ref, or a getter; when it changes after the
 * first reveal (e.g. the locale switches) it re-types the new text.
 *
 * Attach the returned `target` ref to the element to watch and bind `typed` as
 * the visible text. `isComplete` flips true once the whole string is written.
 *
 * Respects prefers-reduced-motion / missing IntersectionObserver by showing the
 * full text immediately, and has a fail-safe so text can never get stuck blank.
 *
 * @param {string|import('vue').Ref<string>|(() => string)} source
 * @param {{ speed?: number }} [options]
 */
export function useTypeOnReveal(source, { speed = 55 } = {}) {
  const target = ref(null);
  const typed = ref('');
  const isComplete = ref(false);

  let typeTimer = null;
  let failSafe = null;
  let observer = null;
  let revealed = false; // has the element entered the viewport at least once?

  const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const typeOut = () => {
    clearTimeout(typeTimer);
    const fullText = toValue(source) ?? '';

    if (reduced() || !fullText) {
      typed.value = fullText;
      isComplete.value = true;
      return;
    }

    isComplete.value = false;
    let index = 0;
    const step = () => {
      typed.value = fullText.slice(0, ++index);
      if (index < fullText.length) {
        typeTimer = setTimeout(step, speed);
      } else {
        isComplete.value = true;
      }
    };
    typed.value = '';
    step();
  };

  const reveal = () => {
    if (revealed) return;
    revealed = true;
    clearTimeout(failSafe);
    observer?.disconnect();
    typeOut();
  };

  onMounted(() => {
    if (reduced() || typeof IntersectionObserver === 'undefined' || !target.value) {
      reveal();
      return;
    }

    observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && reveal()),
      { threshold: 0.35 },
    );
    observer.observe(target.value);

    // If the observer never fires, type it out anyway.
    failSafe = setTimeout(reveal, 1600);
  });

  // Re-type when the source text changes, but only once already revealed.
  watch(
    () => toValue(source),
    () => {
      if (revealed) typeOut();
    },
  );

  onBeforeUnmount(() => {
    clearTimeout(typeTimer);
    clearTimeout(failSafe);
    observer?.disconnect();
  });

  return { target, typed, isComplete };
}
