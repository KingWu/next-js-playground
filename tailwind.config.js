module.exports = {
  purge: [],
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      'primary-dark': 'var(--primary-dark-color)',
      secondary: 'var(--secondary-color)',
      'secondary-dark': 'var(--secondary-dark-color)',
      background: 'var(--background-color)',
      surface: 'var(--surface-color)',
      error: 'var(--error-color)',
      'on-primary': 'rgba(var(--on-primary-color), var(--text-opacity))',
      'on-secondary': 'rgba(var(--on-secondary-color), var(--text-opacity))',
      'on-background': 'rgba(var(--on-background-color), var(--text-opacity))',
      'on-surface': 'rgba(var(--on-surface-color), var(--text-opacity))',
      'on-error': 'rgba(var(--on-error-color), var(--text-opacity))',
    },
    extend: {
      textOpacity: {
        'normal': '0.87',
        'medium': '0.6',
        'disabled': '0.38'
      },
      /** Breakpoints */
      screens: {
        desktop: { min: '960px' },
        mobile: { max: '959px' },
      },
    },
  },
  variants: {},
  plugins: [],
}
