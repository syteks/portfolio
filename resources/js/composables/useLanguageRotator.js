import { useRotatingIndex } from '@/composables/useRotatingIndex';

/**
 * How different languages declare a *mutable* list/array. The Skills section
 * rotates category headers through these. Deliberately NOT `const` — the skill
 * set keeps growing, so every form here is reassignable/growable.
 *
 * Token slots (so each part can be colored): keyword (violet), typeBefore /
 * typeAfter (cyan), prefix+variable (accent), tail (slate), close (slate).
 * Order requested: PHP, JavaScript, TypeScript, C#, Go, C++.
 */
export const declarationStyles = [
  { label: 'php', keyword: '', typeBefore: '', prefix: '$', typeAfter: '', tail: ' = [', close: '];' },
  { label: 'js', keyword: 'let', typeBefore: '', prefix: '', typeAfter: '', tail: ' = [', close: ']' },
  { label: 'ts', keyword: 'let', typeBefore: '', prefix: '', typeAfter: ': string[]', tail: ' = [', close: ']' },
  { label: 'c#', keyword: 'var', typeBefore: '', prefix: '', typeAfter: '', tail: ' = new[] {', close: '};' },
  { label: 'go', keyword: '', typeBefore: '', prefix: '', typeAfter: '', tail: ' := []string{', close: '}' },
  { label: 'c++', keyword: '', typeBefore: 'std::vector<std::string>', prefix: '', typeAfter: '', tail: ' = {', close: '};' },
];

/**
 * Reactive index advancing through declarationStyles on an interval. Call once
 * so every category stays in sync. Respects prefers-reduced-motion.
 *
 * @param {number} intervalMs
 */
export function useLanguageRotator(intervalMs = 2800) {
  const { index: styleIndex } = useRotatingIndex(declarationStyles.length, intervalMs);
  return { styleIndex };
}
