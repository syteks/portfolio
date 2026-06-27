const localeTag = (locale) => (locale === 'fr' ? 'fr-FR' : 'en-US');

/**
 * Format a date string into a "Month Year" label (e.g. "February 2025" /
 * "février 2025"). Returns null for falsy input so callers can render "Present".
 *
 * @param {string|null} dateString
 * @param {'en'|'fr'} [locale]
 * @return {string|null}
 */
export const formatMonthYear = (dateString, locale = 'en') => {
  if (!dateString) return null;

  return new Date(dateString).toLocaleDateString(localeTag(locale), {
    year: 'numeric',
    month: 'long',
  });
};

/**
 * Human-readable duration between two dates (end defaults to now).
 *
 * @param {string} start
 * @param {string|null} end
 * @param {'en'|'fr'} [locale]
 * @return {string}
 */
export const formatDuration = (start, end, locale = 'en') => {
  const startDate = new Date(start);
  const endDate = end ? new Date(end) : new Date();

  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth() + 1;

  if (months < 0) {
    years--;
    months += 12;
  }

  if (locale === 'fr') {
    if (years === 0 && months === 0) return 'Moins d’un mois';
    const parts = [];
    if (years > 0) parts.push(`${years} an${years > 1 ? 's' : ''}`);
    if (months > 0) parts.push(`${months} mois`);
    return parts.join(', ');
  }

  if (years === 0 && months === 0) {
    return 'Less than a month';
  }

  const parts = [];
  if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
  if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);

  return parts.join(', ');
};

/**
 * Whole years elapsed since a given year (used for the "years of experience" stat).
 *
 * @param {number} sinceYear
 * @return {number}
 */
export const yearsSince = (sinceYear) => {
  const start = new Date(sinceYear, 0, 1);
  const diffMs = Date.now() - start.getTime();

  return Math.round(diffMs / (1000 * 3600 * 24 * 365));
};
