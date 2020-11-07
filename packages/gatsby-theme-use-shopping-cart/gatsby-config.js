require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  siteMetadata: {
    title: `MilagrowCBD`,
    description: ``,
    author: `@gatsbyjs`
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-stripe',
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images/`
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`
      }
    }
  ],
  siteMetadata: {
    title: 'Gatsby Theme Stripe Base',
    titleTemplate: 'Gatsby Theme Stripe Base',
    description: 'JAMStack solutions for your e-commerce Stripe stores!',
    url: 'https://www.twitter.com/dayhaysoos', // No trailing slash allowed!
    image: '../images/logo.jpeg',
    socialAccounts: [
      {
        platform: 'twitter',
        url: 'wwww.twitter.com/dayhaysoos',
        userName: '@dayhaysoos'
      },
      {
        platform: 'instagram',
        url: 'https://www.instagram.com/dayhaysoos',
        userName: '@dayhaysoos'
      }
    ]
  }
}
