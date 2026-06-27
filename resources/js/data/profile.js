/**
 * Single source of truth for personal / identity *structure*. Language-neutral
 * data only (handles, emails, links, icons, ids, levels). Translatable prose
 * lives in resources/js/locales/*.json and is resolved with vue-i18n keys
 * referenced here via `*Key` fields.
 */
export const profile = {
  name: 'Sergiu Grigore Turcanu',
  handle: 'sergiu',
  host: 'portfolio',

  avatar: '/images/PortfolioTest.jpg',
  email: 'sergiugrigoreturcanu@gmail.com',
  experienceSince: 2019,

  location: 'Montréal, Canada',
  timezone: 'UTC−5 (EST)',

  // Spoken languages. `key` → profile.languageNames.<key>; `level` → a canonical
  // key into profile.levels (also drives the proficiency meter).
  languages: [
    { key: 'english', level: 'Good' },
    { key: 'french', level: 'Good' },
    { key: 'romanian', level: 'Good' },
    { key: 'russian', level: 'Beginner' },
    { key: 'japanese', level: 'Beginner' },
  ],

  // `key` → profile.interests.<key>.
  interests: [
    { key: 'coding', main: true },
    { key: 'badminton' },
    { key: 'languages' },
    { key: 'gaming' },
    { key: 'hardware' },
    { key: 'hiking' },
    { key: 'exploring' },
    { key: 'documentaries' },
  ],

  // "About / journey" timeline. `icon` references a top-level svg component name;
  // the prose for each step is about.journey[i] in the locale files (same order).
  journey: [
    { icon: 'LightBulb' },
    { icon: 'IconAngleBrackets' },
    { icon: 'Briefcase' },
    { icon: 'Layers' },
    { icon: 'GraduationCap' },
  ],
};
