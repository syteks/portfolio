import { ref, onMounted, onBeforeUnmount } from 'vue';

/**
 * Drives a self-playing "spotlight" walkthrough of a list. When the bound
 * element scrolls into view, items are revealed one at a time; only the current
 * item is highlighted, and the highlight advances down the list as each next
 * item appears. Once past the last item the highlight clears.
 *
 * On touch / no-hover devices (where the per-card :hover highlight can't fire),
 * a scroll-driven highlight takes over after the intro: whichever item is
 * nearest the viewport centre becomes highlighted as you scroll.
 *
 * Attach `target` to the container to watch and register each item element via
 * `registerItem(el, index)`. Use `isRevealed(i)` to fade items in and
 * `isHighlighted(i)` for the highlight state.
 *
 * @param {number} count
 * @param {{ stepMs?: number, startDelay?: number }} [options]
 */
export function useSequentialHighlight(count, options = {}) {
  const { stepMs = 650, startDelay = 250 } = options;

  const target = ref(null);
  const activeIndex = ref(-1); // intro spotlight
  const focusedIndex = ref(-1); // scroll-centre highlight (touch)
  const maxRevealed = ref(-1);

  const itemElements = [];
  let timers = [];
  let revealObserver = null;
  let centerObserver = null;
  let started = false;

  const clearTimers = () => {
    timers.forEach(clearTimeout);
    timers = [];
  };

  const registerItem = (el, index) => {
    if (el) itemElements[index] = el;
  };

  // Touch/no-hover only: highlight whichever card sits closest to the centre.
  const enableCenterFocus = () => {
    const touch = window.matchMedia?.('(hover: none)').matches;
    if (!touch || typeof IntersectionObserver === 'undefined') return;

    const recompute = () => {
      const viewportHeight = window.innerHeight;
      let best = -1;
      let bestDistance = Infinity;
      itemElements.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const centre = rect.top + rect.height / 2;
        if (centre <= 0 || centre >= viewportHeight) return;
        const distance = Math.abs(centre - viewportHeight / 2);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = index;
        }
      });
      focusedIndex.value = best;
    };

    centerObserver = new IntersectionObserver(recompute, {
      threshold: [0, 0.25, 0.5, 0.75, 1],
    });
    itemElements.forEach((el) => el && centerObserver.observe(el));
    recompute();
  };

  const start = () => {
    if (started) return;
    started = true;
    revealObserver?.disconnect();

    let index = 0;
    const advance = () => {
      if (index < count) {
        activeIndex.value = index;
        if (index > maxRevealed.value) maxRevealed.value = index;
        index += 1;
        timers.push(setTimeout(advance, stepMs));
      } else {
        activeIndex.value = -1; // intro highlight clears
        enableCenterFocus(); // hand off to scroll-centre highlight on touch
      }
    };
    timers.push(setTimeout(advance, startDelay));
  };

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined' || !target.value) {
      maxRevealed.value = count - 1; // no IO: just show everything
      return;
    }
    revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && start()),
      { threshold: 0.1 },
    );
    revealObserver.observe(target.value);
  });

  onBeforeUnmount(() => {
    clearTimers();
    revealObserver?.disconnect();
    centerObserver?.disconnect();
  });

  const isRevealed = (index) => index <= maxRevealed.value;
  const isActive = (index) => index === activeIndex.value;
  const isHighlighted = (index) => index === activeIndex.value || index === focusedIndex.value;

  return { target, registerItem, isRevealed, isActive, isHighlighted };
}
