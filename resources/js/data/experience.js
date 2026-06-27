/**
 * Professional history — language-neutral structure only.
 *
 * `id` keys into experience.companies.<id> in the locale files for each role's
 * prose (title / description / responsibilities), matched by position. Stack
 * `category` keys into skills.categories.<category>; tech names in `items` are
 * proper names and stay in English. Dates are MM/DD/YYYY; `end: null` = present.
 */
export const experiences = [
  {
    id: 'aylo',
    company: 'Aylo',
    link: 'https://aylo.com',
    roles: [
      { date: { start: '02/01/2025', end: null } },
      { date: { start: '08/01/2023', end: '01/01/2025' } },
    ],
    stack: [
      { category: 'languages', accent: 'emerald', items: ['PHP', 'JavaScript', 'TypeScript', 'Go', 'C#', 'GraphQL'] },
      { category: 'databases', accent: 'sky', items: ['Firestore', 'Redis'] },
      { category: 'frameworks', accent: 'violet', items: ['Laravel', '.NET', 'React', 'Node-RED', 'Blazor'] },
      {
        category: 'tools',
        accent: 'amber',
        items: ['PhpStorm', 'Rider', 'Git', 'GitLab', 'Postman', 'Docker', 'Kubernetes', 'GCP', 'Azure', 'Elasticsearch', 'OpsGenie', 'Jira', 'PHPUnit', 'Linux'],
      },
    ],
  },
  {
    id: 'tolle',
    company: 'Tollé',
    link: 'https://agencetolle.com',
    roles: [
      { date: { start: '11/01/2020', end: '07/01/2023' } },
    ],
    stack: [
      { category: 'languages', accent: 'emerald', items: ['PHP', 'JavaScript', 'TypeScript', 'HTML', 'CSS'] },
      { category: 'databases', accent: 'sky', items: ['MySQL', 'Redis', 'MS SQL Server'] },
      { category: 'frameworks', accent: 'violet', items: ['Laravel', 'Vue.js', 'Tailwind CSS', 'WordPress'] },
      { category: 'tools', accent: 'amber', items: ['PhpStorm', 'DataGrip', 'Git', 'Postman', 'BitBucket', 'Jira', 'Laravel Nova', 'Vite'] },
    ],
  },
  {
    id: 'spordle',
    company: 'Spordle',
    link: 'https://spordle.com',
    roles: [
      { date: { start: '07/01/2020', end: '11/01/2020' } },
      { date: { start: '01/01/2020', end: '04/01/2020' } },
    ],
    stack: [
      { category: 'languages', accent: 'emerald', items: ['PHP', 'JavaScript', 'HTML', 'CSS'] },
      { category: 'databases', accent: 'sky', items: ['MySQL'] },
      { category: 'frameworks', accent: 'violet', items: ['CodeIgniter'] },
      { category: 'tools', accent: 'amber', items: ['VS Code', 'Postman', 'Git', 'openSUSE', 'Linux', 'Jira'] },
    ],
  },
  {
    id: 'polygon',
    company: 'Polygon',
    link: 'https://polygon.ca/en/',
    roles: [
      { date: { start: '06/01/2019', end: '08/01/2019' } },
    ],
    stack: [
      { category: 'languages', accent: 'emerald', items: ['C#', 'JavaScript', 'HTML', 'CSS'] },
      { category: 'databases', accent: 'sky', items: ['MS SQL Server'] },
      { category: 'frameworks', accent: 'violet', items: ['AngularJS', '.NET'] },
      { category: 'tools', accent: 'amber', items: ['VS Code', 'Git'] },
    ],
  },
];
