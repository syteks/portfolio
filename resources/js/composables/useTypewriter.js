import { ref, watch, onMounted, onBeforeUnmount, toValue } from 'vue';

/**
 * Cycles through a list of words with a type / pause / delete effect.
 * Returns a reactive `text` ref to bind in the template.
 *
 * `words` may be a plain array, a ref, or a getter — when it changes (e.g. the
 * locale switches) the effect restarts cleanly with the new list.
 *
 * Respects prefers-reduced-motion by showing the first word statically.
 *
 * @param {string[]|import('vue').Ref<string[]>|(() => string[])} words
 * @param {{ typeSpeed?: number, deleteSpeed?: number, pause?: number }} [options]
 */
export function useTypewriter(words, options = {}) {
  const { typeSpeed = 90, deleteSpeed = 45, pause = 1600 } = options;
  const text = ref('');

  let list = [];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;
  let timer = null;
  let stopped = false;
  let mounted = false;

  const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const schedule = (delay) => {
    if (!stopped) timer = setTimeout(tick, delay);
  };

  const tick = () => {
    const word = list[wordIndex % list.length];

    if (!deleting) {
      text.value = word.slice(0, ++charIndex);
      if (charIndex === word.length) {
        deleting = true;
        return schedule(pause);
      }
      return schedule(typeSpeed);
    }

    text.value = word.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      wordIndex++;
      return schedule(typeSpeed);
    }
    return schedule(deleteSpeed);
  };

  const restart = () => {
    clearTimeout(timer);
    wordIndex = 0;
    charIndex = 0;
    deleting = false;
    if (!mounted) return;

    if (reduced() || list.length === 0) {
      text.value = list[0] ?? '';
      return;
    }
    text.value = '';
    schedule(typeSpeed);
  };

  watch(
    () => toValue(words),
    (next) => {
      list = next ?? [];
      restart();
    },
    { immediate: true },
  );

  onMounted(() => {
    mounted = true;
    restart();
  });

  onBeforeUnmount(() => {
    stopped = true;
    clearTimeout(timer);
  });

  return { text };
}
