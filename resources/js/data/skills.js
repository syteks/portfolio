/**
 * Skill catalogue, grouped by category.
 *
 * `accent` is a key into utils/accents.js. `name` must match a key in
 * data/skillIcons.js so the icon can be resolved. `level` is a 0-100 score.
 *
 * The category label is resolved from skills.categories.<id> in the locale
 * files; `variable` is a code identifier and skill `name`s are proper tool
 * names — both stay in English.
 */
export const skillCategories = [
  {
    id: 'languages',
    variable: 'languages',
    accent: 'emerald',
    items: [
      { name: 'PHP', level: 100 },
      { name: 'JavaScript', level: 80 },
      { name: 'TypeScript', level: 80 },
      { name: 'C#', level: 60 },
      { name: 'Go', level: 60 },
      { name: 'C++', level: 50 },
    ],
  },
  {
    id: 'databases',
    variable: 'databases',
    accent: 'sky',
    items: [
      { name: 'MySQL', level: 100 },
      { name: 'Firestore', level: 100 },
      { name: 'Redis', level: 70 },
      { name: 'MS SQL Server', level: 70 },
      { name: 'MongoDB', level: 60 },
      { name: 'Elasticsearch', level: 75 },
    ],
  },
  {
    id: 'frameworks',
    variable: 'frameworks',
    accent: 'violet',
    items: [
      { name: 'Laravel', level: 100 },
      { name: 'Vue.js', level: 90 },
      { name: 'Laravel Nova', level: 90 },
      { name: 'Node-RED', level: 90 },
      { name: 'Node.js', level: 80 },
      { name: 'Tailwind CSS', level: 70 },
      { name: 'Blazor', level: 60 },
      { name: 'jQuery', level: 60 },
      { name: '.NET', level: 60 },
      { name: 'React', level: 50 },
      { name: 'WordPress', level: 40 },
      { name: 'AngularJS', level: 30 },
      { name: 'CodeIgniter', level: 30 },
    ],
  },
  {
    id: 'ai',
    variable: 'aiTools',
    accent: 'rose',
    items: [
      { name: 'Claude' },
      { name: 'ChatGPT' },
      { name: 'Gemini' },
      { name: 'Devin AI' },
    ],
  },
  {
    id: 'tools',
    variable: 'tools',
    accent: 'amber',
    items: [
      { name: 'PhpStorm', level: 100 },
      { name: 'Postman', level: 100 },
      { name: 'PHPUnit', level: 100 },
      { name: 'Git', level: 100 },
      { name: 'BitBucket', level: 90 },
      { name: 'GitHub', level: 90 },
      { name: 'GitLab', level: 90 },
      { name: 'OpsGenie', level: 80 },
      { name: 'Pinia', level: 80 },
      { name: 'Linux', level: 80 },
      { name: 'Jira', level: 80 },
      { name: 'Vite', level: 80 },
      { name: 'GCP', level: 70 },
      { name: 'Docker', level: 70 },
      { name: 'VS Code', level: 60 },
      { name: 'Confluence', level: 60 },
      { name: 'Kubernetes', level: 50 },
    ],
  },
];
