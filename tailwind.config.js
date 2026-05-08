module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#5A5F44',
          'primary-hover': '#7D8654',
          secondary: '#ECEE5D',
        },
        neutral: {
          50:  '#F9F8F5',
          100: '#F2F0EB',
          200: '#E4E1D8',
          300: '#C9C5BA',
          400: '#A8A49A',
          500: '#7C7970',
          600: '#5C5A52',
          700: '#3E3D38',
          800: '#252420',
          900: '#16150F',
        },
        text: {
          primary:   '#1C1B18',
          secondary: '#4A4840',
          muted:     '#908C84',
          inverse:   '#FAF9F6',
          brand:     '#5A5F44',
          accent:    '#ECEE5D',
        },
        bg: {
          base:   '#FAF9F6',
          subtle: '#F2F0EB',
          dark:   '#1C1B18',
        },
        border: {
          default: '#E4E1D8',
          strong:  '#A8A49A',
        },
        semantic: {
          success: { base: '#4A7C4E', light: '#EDF5EE', dark: '#2D5C30' },
          warning: { base: '#C88A1A', light: '#FDF4E3', dark: '#8C5E0F' },
          error:   { base: '#B54A35', light: '#FAEAE7', dark: '#7A2D1E' },
          info:    { base: '#3D7A8C', light: '#E8F3F6', dark: '#245C6A' },
        },
        button: {
          outlined: {
            border:     '#5A5F44',
            text:       '#5A5F44',
            'hover-bg': '#5A5F44',
            'hover-text': '#FAF9F6',
          },
          disabled: {
            bg:     '#E4E1D8',
            text:   '#A8A49A',
            border: '#E4E1D8',
          },
        },
        nav: {
          bg:           '#1C1B18',
          text:         '#FAF9F6',
          'text-muted': '#7C7970',
          'text-hover': '#ECEE5D',
          'text-active':'#ECEE5D',
          border:       '#3E3D38',
        },
      },
      fontFamily: {
        display: ['Funnel Display', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Funnel Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Display — hero moments, expressive statements
        'display-lg': ['3.5625rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display-md': ['2.8125rem', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-sm': ['2.25rem',   { lineHeight: '1.2',  letterSpacing: '-0.01em' }],

        // Headline — section headers, major structural labels
        'headline-lg': ['2.5rem',  { lineHeight: '1.2',  letterSpacing: '-0.01em' }],
        'headline-md': ['1.75rem', { lineHeight: '1.3',  letterSpacing: '0' }],
        'headline-sm': ['1.5rem',  { lineHeight: '1.33', letterSpacing: '0' }],

        // Title — card headers, role titles, company names
        'title-lg': ['1.375rem', { lineHeight: '1.27', letterSpacing: '0' }],
        'title-md': ['1rem',     { lineHeight: '1.5',  letterSpacing: '0.009em' }],
        'title-sm': ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.006em' }],

        // Body — all running copy
        'body-lg': ['1rem',     { lineHeight: '1.6',  letterSpacing: '0.015em' }],
        'body-md': ['0.875rem', { lineHeight: '1.57', letterSpacing: '0.016em' }],
        'body-sm': ['0.75rem',  { lineHeight: '1.5',  letterSpacing: '0.025em' }],

        // Label — nav, buttons, tags, captions
        'label-lg': ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.006em' }],
        'label-md': ['0.75rem',  { lineHeight: '1.33', letterSpacing: '0.031em' }],
        'label-sm': ['0.6875rem',{ lineHeight: '1.45', letterSpacing: '0.05em' }],
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
