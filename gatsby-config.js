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
        spaceId: `xabm8ur8jlri`,
        accessToken: `fff9831d0935139a6d6be95639a1c1547425660f42ca33a72f2c67570dbb9dbd`  
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
