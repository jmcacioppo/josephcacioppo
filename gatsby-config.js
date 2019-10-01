module.exports = {
  siteMetadata: {
    title: `Joseph Cacioppo`,
    description: `Personal website for Joseph Cacioppo`,
    author: `@jmcacioppo`,
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
        name: `joseph-cacioppo`,
        short_name: `josephcacioppo`,
        start_url: `/`,
        background_color: `#222E7A`,
        theme_color: `#222E7A`,
        display: `minimal-ui`,
        icon: `src/images/logo/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
