/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      'margin-left': {
        '10%': '10%',
      },
      'dropShadow': {
        glow: '0 0 10px #ec4899, 0 0 20px #ec4899',
      },
      keyframes: {
        'rotate': {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        'starfield-zoom': {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '85%': { transform: 'scale(2.8)', opacity: '1' },
          '100%': { transform: 'scale(3.5)', opacity: '0' },
        },
        'star-twinkle': {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '0.4' },
        },
        'falling-star-move': {
          '0%': { transform: 'translateY(-100px) rotate(90deg)', opacity: '1' },
          '100%': { transform: 'translateY(120vh) rotate(90deg)', opacity: '0' },
        },
        'glow': {
          '0%, 100%': { filter: 'drop-shadow(0 0 10px #ec4899)' },
          '50%': { filter: 'drop-shadow(0 0 20px #ec4899)' },
        },
        'text-glow-pulse': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'slide-down-fade': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fall-and-fade': {
          '0%': {
            transform: 'translateY(-50%)',
            opacity: '0',
          },
          '5%, 20%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
          '25%, 100%': {
            transform: 'translateY(50%)',
            opacity: '0',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'fall-in': {
          '0%': {
            transform: 'translateY(-20px) scale(0.9)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0) scale(1)',
            opacity: '1',
          },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        'draw-line': {
          'from': {
            transform: 'scaleY(0)',
            opacity: '0'
          },
          'to': {
            transform: 'scaleY(1)',
            opacity: '1'
          },
        },
        'pop-in': {
          'to': {
            opacity: '1',
            transform: 'scale(1)'
          },
        }
      },
      animation: {
        'rotate': "rotate 10s linear infinite",
        'starfield-zoom-slow': 'starfield-zoom 50s linear infinite',
        'starfield-zoom-medium': 'starfield-zoom 40s linear infinite reverse',
        'starfield-zoom-fast': 'starfield-zoom 30s linear infinite',
        'star-twinkle-slow': 'star-twinkle 8s infinite linear',
        'star-twinkle-medium': 'star-twinkle 6s infinite linear reverse',
        'falling-star-1': 'falling-star-move 3s infinite ease-in 0s',
        'falling-star-2': 'falling-star-move 3s infinite ease-in 1s',
        'falling-star-3': 'falling-star-move 3s infinite ease-in 2s',
        'falling-star-4': 'falling-star-move 3s infinite ease-in 3s',
        'falling-star-5': 'falling-star-move 3s infinite ease-in 4s',
        'glow-pulse': 'glow 2s ease-in-out infinite',
        'text-glow-pulse': 'text-glow-pulse 3s ease-in-out infinite',
        'slide-down-fade': 'slide-down-fade 1.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 1.5s ease-out forwards 0.2s',
        'slide-in-left': 'slide-in-left 1.5s ease-out forwards',
        'fall-and-fade': 'fall-and-fade 16s ease-in-out infinite',
        'fade-in-left': 'fade-in-left 0.5s ease-out forwards',
        'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
        'fall-in': 'fall-in 1s ease-out forwards',
        'pop-in': 'pop-in 0.3s ease-out forwards',
        'draw-line': 'draw-line 1s 0.2s ease-out forwards'
      },
    },
  },
  plugins: [],
}
