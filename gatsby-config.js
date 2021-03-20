/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const resolveOptions = require('./gatsby-resolve')
const path = require('path')

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        ...resolveOptions.resolve,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['EB Garamond:200,300,400,700'],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-react-helmet',
    },
    {
      resolve: 'gatsby-plugin-intl',
      options: {
        path: path.resolve(__dirname, 'src', 'locales'),
        languages: ['en', 'pt'],
        defaultLanguage: 'en',
        redirect: false,
      },
    },
  ],
}
