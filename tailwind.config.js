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
      'on-primary': 'var(--on-primary-color)',
      'on-secondary': 'var(--on-secondary-color)',
      'on-background': 'rgba(var(--on-background-color), var(--text-opacity))',
      'on-surface': 'var(--on-surface-color)',
      'on-error': 'var(--on-error-color)',
    },
    extend: {
      textOpacity: {
        'normal': '0.87',
        'medium': '0.6',
        'disabled': '0.38'
      }
    },
  },
  variants: {},
  plugins: [],
}
