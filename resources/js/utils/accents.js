/**
 * Accent palette for the terminal theme.
 *
 * Each entry holds *complete* Tailwind class strings (never built by string
 * concatenation) so Tailwind's scanner picks them up from this .js file.
 * Reference an accent by key from the data layer and resolve it with getAccent.
 */
export const accents = {
  emerald: {
    text: 'text-emerald-400',
    border: 'border-emerald-500/30',
    borderActive: 'border-emerald-400',
    hoverBorder: 'hover:border-emerald-400',
    ring: 'ring-emerald-400/40',
    dot: 'bg-emerald-400',
    bar: 'bg-emerald-400',
    glow: 'shadow-emerald-500/20',
    hoverGlow: 'hover:shadow-lg hover:shadow-emerald-500/25',
    activeBorder: 'active:border-emerald-400',
    activeGlow: 'active:shadow-lg active:shadow-emerald-500/25',
  },
  sky: {
    text: 'text-sky-400',
    border: 'border-sky-500/30',
    borderActive: 'border-sky-400',
    hoverBorder: 'hover:border-sky-400',
    ring: 'ring-sky-400/40',
    dot: 'bg-sky-400',
    bar: 'bg-sky-400',
    glow: 'shadow-sky-500/20',
    hoverGlow: 'hover:shadow-lg hover:shadow-sky-500/25',
    activeBorder: 'active:border-sky-400',
    activeGlow: 'active:shadow-lg active:shadow-sky-500/25',
  },
  violet: {
    text: 'text-violet-400',
    border: 'border-violet-500/30',
    borderActive: 'border-violet-400',
    hoverBorder: 'hover:border-violet-400',
    ring: 'ring-violet-400/40',
    dot: 'bg-violet-400',
    bar: 'bg-violet-400',
    glow: 'shadow-violet-500/20',
    hoverGlow: 'hover:shadow-lg hover:shadow-violet-500/25',
    activeBorder: 'active:border-violet-400',
    activeGlow: 'active:shadow-lg active:shadow-violet-500/25',
  },
  amber: {
    text: 'text-amber-400',
    border: 'border-amber-500/30',
    borderActive: 'border-amber-400',
    hoverBorder: 'hover:border-amber-400',
    ring: 'ring-amber-400/40',
    dot: 'bg-amber-400',
    bar: 'bg-amber-400',
    glow: 'shadow-amber-500/20',
    hoverGlow: 'hover:shadow-lg hover:shadow-amber-500/25',
    activeBorder: 'active:border-amber-400',
    activeGlow: 'active:shadow-lg active:shadow-amber-500/25',
  },
  rose: {
    text: 'text-rose-400',
    border: 'border-rose-500/30',
    borderActive: 'border-rose-400',
    hoverBorder: 'hover:border-rose-400',
    ring: 'ring-rose-400/40',
    dot: 'bg-rose-400',
    bar: 'bg-rose-400',
    glow: 'shadow-rose-500/20',
    hoverGlow: 'hover:shadow-lg hover:shadow-rose-500/25',
    activeBorder: 'active:border-rose-400',
    activeGlow: 'active:shadow-lg active:shadow-rose-500/25',
  },
};

export const getAccent = (key) => accents[key] ?? accents.emerald;
