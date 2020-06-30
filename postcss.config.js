const plugins = process.env.NODE_ENV === 'production'
      ? [
          'postcss-flexbugs-fixes',
          [
            'postcss-preset-env',
            {
              autoprefixer: {
                flexbox: 'no-2009',
                grid: 'autoplace',
              },
              stage: 3,
              features: {
                'custom-properties': true,
              },
            },
          ],
        ]
      : [
          // No transformations in development
        ]
  
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'postcss-nested',
    ...plugins,
  ]
}