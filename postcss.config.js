const autoprefixer = require('autoprefixer');
const postCSSCssVariables = require('postcss-css-variables');
const postCSSCustomMedia = require('postcss-custom-media');
const postCSSImport = require('postcss-import')();
const postCSSNested = require('postcss-nested');

const postCSSAutoprefixer = autoprefixer();

var fs = require('fs');

var cssVariables = fs.readFileSync('src/app/config/css-variables.css', 'utf8');
console.log('🚀 ~ file: postcss.config.js ~ line 12 ~ cssVariables', cssVariables);

// const cssVariables = require('app/config/css-variables');

const gridBreakpoints = {
  xs: '480px',
  sm: '768px',
  md: '992px',
  lg: '1024px',
  xl: '1200px',
  xxl: '1440px',
};

module.exports = {
  plugins: [
    postCSSImport,
    // postCSSCssVariables({
    //   variables: cssVariables,
    // }),
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
};
