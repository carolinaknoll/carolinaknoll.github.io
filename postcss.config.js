const autoprefixer = require('autoprefixer')
const postCSSCssVariables = require('postcss-css-variables')
const postCSSCustomMedia = require('postcss-custom-media')
const postCSSImport = require('postcss-import')()
const postCSSNested = require('postcss-nested')

const cssVariables = require('./src/config/css-variables')

const postCSSAutoprefixer = autoprefixer()

const gridBreakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1440px',
}

module.exports = {
  plugins: [
    postCSSImport,
    postCSSCssVariables({
      variables: cssVariables,
    }),
    postCSSCustomMedia({
      importFrom: {
        customMedia: {
          '--xs-viewport': `(max-width: ${gridBreakpoints.xs})`,
          '--sm-viewport': `(max-width: ${gridBreakpoints.sm})`,
          '--md-viewport': `(max-width: ${gridBreakpoints.md})`,
          '--lg-viewport': `(max-width: ${gridBreakpoints.lg})`,
          '--xl-viewport': `(max-width: ${gridBreakpoints.xl})`,
          '--xxl-viewport': `(max-width: ${gridBreakpoints.xxl})`,
        },
      },
    }),
    postCSSAutoprefixer,
    postCSSNested,
  ],
}
