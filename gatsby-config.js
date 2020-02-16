module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Blogs by Anupam Dagar`,
    siteUrl: `http://anupamdagar.com/blog`,
    description: ``,
    topics: ["programming", "blogs", "python", "javascript", "GitHub", "geeks", "everyone"],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Tags',
        path: '/tags'
      },
    ],
    footerMenu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Tags',
        path: '/tags'
      },
    ],
    search: true,
    author: {
      name: `Anupam Dagar`,
      description: `I'm <strong>Anupam Dagar</strong>, a Full Stack Developer and final year undergraduate student at IIIT Allahabad.`,
      social: {
        facebook: ``,
        twitter: `https://twitter.com/siriusdagar`,
        linkedin: `https://www.linkedin.com/in/anupamdagar/`,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/Anupam-dagar`,
        heroku: `https://www.heroku.com/podcasts/codeish/43-the-github-student-developer-pack`
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-158646013-1",
      },
    },
  ]
};
