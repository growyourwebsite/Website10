tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#1B6EC2', dark: '#14569A', light: '#5AA2E6', soft: '#E8F1FB' },
        ink: '#333333',
        muted: '#666666',
        band: '#EDEDED',
        line: '#E3E3E3',
        night: { DEFAULT: '#333333', field: '#444444', edge: '#666666' },
      },
      fontFamily: {
        sans: ['Mulish', 'system-ui', 'sans-serif'],
        slab: ['"Roboto Slab"', 'Georgia', 'serif'],
      },
      maxWidth: { site: '1170px' },
    },
  },
};
