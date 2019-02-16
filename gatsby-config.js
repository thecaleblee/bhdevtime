module.exports = {
  siteMetadata: {
    title: `Hero Component`,
    description: `First attempt at component port to react via gatsby starter project`,
    author: `cmasters`,
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `{ENTER SPACE ID HERE}`,
        accessToken: `{ENTER ACCESS TOKEN HERE}`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
