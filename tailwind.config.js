module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#1a1a1a", // Professional foundation
        secondary: "#2d2d2d", // Content separation
        accent: "#00d4ff", // Technical precision
        
        // Background Colors
        background: "#0f0f0f", // Deep canvas
        surface: "#252525", // Card elevation
        
        // Text Colors
        "text-primary": "#ffffff", // Crystal clarity
        "text-secondary": "#b3b3b3", // Supporting information
        
        // Status Colors
        success: "#00ff88", // Achievement celebration
        warning: "#ffb800", // Attention without alarm
        error: "#ff4757", // Clear problem indication
        
        // Interactive States
        border: "#333333", // Form inputs and interactive elements
        hover: "#333333", // Hover state background
        
        // Additional utility colors
        "accent-light": "#33e0ff", // Lighter accent for hover states
        "accent-dark": "#0099cc", // Darker accent for pressed states
        "surface-light": "#2a2a2a", // Lighter surface for nested elements
        "surface-dark": "#1f1f1f", // Darker surface for depth
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        sans: ['Inter', 'sans-serif'], // Default sans-serif
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'elevation': '0 4px 20px rgba(0, 0, 0, 0.3)',
        'subtle': '0 2px 10px rgba(0, 0, 0, 0.2)',
        'glow': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-success': '0 0 20px rgba(0, 255, 136, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)' },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '200': '200ms',
      },
      transitionTimingFunction: {
        'out': 'ease-out',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}