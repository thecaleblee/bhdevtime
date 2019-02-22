module.exports = {
  siteMetadata: {
    title: `BHFOSDEV Caleb Masters`,
    description: `Gatsbyjs version of a few BHFOS components and a code flipper module in progress`,
    author: `@gatsbyjs calebmasters`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xabm8ur8jlri`,
        accessToken: `fff9831d0935139a6d6be95639a1c1547425660f42ca33a72f2c67570dbb9dbd`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
