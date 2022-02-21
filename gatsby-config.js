require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Dylan Sheffer',
    author: 'Dylan Sheffer',
    description: 'Dylan Sheffer- Web Developer. A11y Advocate. Tea Enthusiast.',
    siteUrl: process.env.DEPLOY_PRIME_URL,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        root: __dirname,
        remarkPlugins: [
          [
            require('gatsby-remark-vscode').remarkPlugin,
            {
              theme: `Monokai Pro`,
              extensions: [`${__dirname}/build-files/theme.vsix`],
            },
          ],
        ],
        gatsbyRemarkPlugins: [
          `gatsby-remark-copy-linked-files`,
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1500,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          // {
          //   resolve: `gatsby-remark-autolink-headers`,
          //   options: {
          //     maintainCase: true,
          //     className: `header-anchor`,
          //     icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
          //     elements: [`h1`, `h2`, `h3`, `h4`],
          //   },
          // },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `Dylan Sheffer`,
              short_name: `Dylan Sheffer`,
              start_url: `/`,
              background_color: `#2d2a2e`,
              theme_color: `#2d2a2e`,
              display: `minimal-ui`,
              icon: `${__dirname}/static/logo.svg`,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Open Sans'],
        },
        custom: {
          families: ['Hack'],
          urls: [
            'https://cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css',
          ],
        },
      },
    },
    `gatsby-plugin-netlify`,
  ],
};
