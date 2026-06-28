/**
 * The "files" shown in the editor file-tree, tabs, and command palette.
 * Each maps to a section id on the page. `type` drives the filetype icon color.
 */
export const editorFiles = [
  { id: 'home', name: 'README.md', type: 'md', section: 'home' },
  { id: 'about', name: 'about.md', type: 'md', section: 'about' },
  { id: 'skills', name: 'skills.json', type: 'json', section: 'skills' },
  { id: 'experience', name: 'experience.log', type: 'log', section: 'experience' },
  { id: 'profile', name: 'profile.yaml', type: 'yaml', section: 'profile' },
  { id: 'contact', name: 'contact.sh', type: 'sh', section: 'contact' },
];

/** Short uppercase tag + color per filetype (stand-in for nerd-font icons). */
const fileTypeBadges = {
  md: { tag: 'md', color: 'text-sky-400' },
  json: { tag: '{}', color: 'text-amber-400' },
  log: { tag: '≡', color: 'text-emerald-400' },
  yaml: { tag: 'yml', color: 'text-rose-400' },
  sh: { tag: '$', color: 'text-violet-400' },
};

export const getBadge = (type) => fileTypeBadges[type] ?? { tag: '•', color: 'text-slate-400' };
