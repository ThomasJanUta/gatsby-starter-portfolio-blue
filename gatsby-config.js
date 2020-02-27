module.exports = {
  siteMetadata: {
    title: "Portfolio Blue",
    description: "Showcase your portfolio in a clean and playful manner.",
    siteUrl: "https://your-domain.domain",
    image: "/graphical/web-icon.png",
    // twitterUsername: "",
    // siteLanguage: "en",
    author: "Your Name",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`, // call first
      options: {
        // insert your own tracking ID here or remove this plugin to disable Google Analytics
        trackingId: "YOUR_TRACKING_ID",
        head: true,
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              className: `gatsby-remark-autolink-headers`,
              removeAccents: true,
            },
          },
        ],
      },
    },

    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,

    /** --- CSS plugins --- */
    {
      resolve: "gatsby-plugin-material-ui",
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    "gatsby-plugin-styled-components", // call after material ui

    /** --- data source plugins --- */
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/static`,
        name: "static",
      },
    },
  ],
};
