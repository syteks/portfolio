/**
 * Small wrappers around media queries used to make the UI adapt to user
 * preferences and device capabilities. Centralised here so the query strings
 * (easy to typo) live in exactly one place.
 */

const matches = (query) =>
  typeof window !== 'undefined' && !!window.matchMedia?.(query).matches;

/** True when the user has asked the OS to minimise non-essential motion. */
export const prefersReducedMotion = () => matches('(prefers-reduced-motion: reduce)');

/** True on touch/no-hover devices, where `:hover` interactions can't fire. */
export const isTouchDevice = () => matches('(hover: none)');
