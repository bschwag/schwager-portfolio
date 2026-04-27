module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontSize: {
        // Display — hero moments, expressive statements
        'display-lg': ['3.5625rem', { lineHeight: '1.12', letterSpacing: '-0.015em' }],
        'display-md': ['2.8125rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
        'display-sm': ['2.25rem',   { lineHeight: '1.2',  letterSpacing: '-0.005em' }],

        // Headline — section headers, major structural labels
        'headline-lg': ['2.5rem',  { lineHeight: '1.25', letterSpacing: '0' }],
        'headline-md': ['1.75rem', { lineHeight: '1.3',  letterSpacing: '0' }],
        'headline-sm': ['1.5rem',  { lineHeight: '1.33', letterSpacing: '0' }],

        // Title — card headers, role titles, company names
        'title-lg': ['1.375rem', { lineHeight: '1.27', letterSpacing: '0' }],
        'title-md': ['1rem',     { lineHeight: '1.5',  letterSpacing: '0.009em' }],
        'title-sm': ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.006em' }],

        // Body — all running copy
        'body-lg': ['1rem',     { lineHeight: '1.6',  letterSpacing: '0.031em' }],
        'body-md': ['0.875rem', { lineHeight: '1.57', letterSpacing: '0.016em' }],
        'body-sm': ['0.75rem',  { lineHeight: '1.33', letterSpacing: '0.025em' }],

        // Label — nav, buttons, tags, captions
        'label-lg': ['0.875rem', { lineHeight: '1.43', letterSpacing: '0.006em' }],
        'label-md': ['0.75rem',  { lineHeight: '1.33', letterSpacing: '0.031em' }],
        'label-sm': ['0.6875rem',{ lineHeight: '1.45', letterSpacing: '0.031em' }],
      },
    },
  },
  plugins: [],
};
