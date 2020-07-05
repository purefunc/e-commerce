module.exports = {
  siteMetadata: {
    title: `E-commerce template`,
    description: `A template for Gatsby and Shopify sites.`,
    author: `@_purefunc`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `legal`,
        path: `${__dirname}/src/legal`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,

    // {
    //   resolve: "gatsby-source-shopify",
    //   options: {
    //     shopName: process.env.SHOP_NAME,
    //     accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
    //     // see: https://help.shopify.com/en/api/storefront-api/reference/queryroot
    //     // Defaults to 2019-07
    //     apiVersion: "2020-04",
    //     // Possible values are: 'shop' and 'content'.
    //     // Defaults to ['shop', 'content'].
    //     includeCollections: ["shop"],
    //   },
    // },
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
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
