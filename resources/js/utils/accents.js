/**
 * Accent palette for the terminal theme.
 *
 * Each entry holds *complete* Tailwind class strings (never built by string
 * concatenation) so Tailwind's scanner picks them up from this .js file.
 * Reference an accent by key from the data layer and resolve it with getAccent.
 *
 * Fields map to where they're consumed:
 *   text                       category label / accent text (Skills, Experience)
 *   dot                        the little status dot
 *   hoverBorder / hoverGlow    pointer hover feedback (SkillCard, StackChip)
 *   activeBorder / activeGlow  tap feedback on touch devices
 */
export const accents = {
  emerald: {
    text: 'text-emerald-400',
    dot: 'bg-emerald-400',
    hoverBorder: 'hover:border-emerald-400',
    hoverGlow: 'hover:shadow-lg hover:shadow-emerald-500/25',
    activeBorder: 'active:border-emerald-400',
    activeGlow: 'active:shadow-lg active:shadow-emerald-500/25',
  },
  sky: {
    text: 'text-sky-400',
    dot: 'bg-sky-400',
    hoverBorder: 'hover:border-sky-400',
    hoverGlow: 'hover:shadow-lg hover:shadow-sky-500/25',
    activeBorder: 'active:border-sky-400',
    activeGlow: 'active:shadow-lg active:shadow-sky-500/25',
  },
  violet: {
    text: 'text-violet-400',
    dot: 'bg-violet-400',
    hoverBorder: 'hover:border-violet-400',
    hoverGlow: 'hover:shadow-lg hover:shadow-violet-500/25',
    activeBorder: 'active:border-violet-400',
    activeGlow: 'active:shadow-lg active:shadow-violet-500/25',
  },
  amber: {
    text: 'text-amber-400',
    dot: 'bg-amber-400',
    hoverBorder: 'hover:border-amber-400',
    hoverGlow: 'hover:shadow-lg hover:shadow-amber-500/25',
    activeBorder: 'active:border-amber-400',
    activeGlow: 'active:shadow-lg active:shadow-amber-500/25',
  },
  rose: {
    text: 'text-rose-400',
    dot: 'bg-rose-400',
    hoverBorder: 'hover:border-rose-400',
    hoverGlow: 'hover:shadow-lg hover:shadow-rose-500/25',
    activeBorder: 'active:border-rose-400',
    activeGlow: 'active:shadow-lg active:shadow-rose-500/25',
  },
};

export const getAccent = (key) => accents[key] ?? accents.emerald;
