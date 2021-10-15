const config = {
  pathPrefix: process.env.GATSBY_PREFIX ? `/` + process.env.GATSBY_PREFIX : ``,
  siteMetadata: {
    title: `Collabur DS`,
    description: `The official Collabur Design System`,
    author: `@mothershipvc`,
    navigation: [
      {
        title: `DS Overview`,
        items: [
          {
            title: `Purpose`,
            path: `/overview/purpose/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Benefits`,
            path: `/overview/benefits/`,
            parent: `/`,
            order: 1,
          },
          {
            title: `License`,
            path: `/overview/license/`,
            parent: `/`,
            order: 1,
          }
        ]
      },
      {
        title: `Design Language`,
        items: [
          {
            title: `Brand`,
            path: `/design-language/brand/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Personality`,
            path: `/design-language/brand/personality/`,
            parent: `/design-language/brand/`,
            order: 0,
          },
          {
            title: `Design principles`,
            path: `/design-language/brand/design-principles/`,
            parent: `/design-language/brand/`,
            order: 0,
          },
          {
            title: `Tone of voice`,
            path: `/design-language/brand/tone-of-voice/`,
            parent: `/design-language/brand/`,
            order: 0,
          },
          {
            title: `Terminology`,
            path: `/design-language/brand/terminology/`,
            parent: `/design-language/brand/`,
            order: 0,
          },
          {
            title: `Writing guidelines`,
            path: `/design-language/brand/writing-guidelines/`,
            parent: `/design-language/brand/`,
            order: 0,
          },
          {
            title: `Logo`,
            path: `/design-language/logo/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Usage`,
            path: `/design-language/logo/#usage`,
            parent: `/design-language/logo/`,
            order: 0,
          },
          {
            title: `Do's`,
            path: `/design-language/logo/#do`,
            parent: `/design-language/logo/`,
            order: 0,
          },
          {
            title: `Don'ts`,
            path: `/design-language/logo/#dont`,
            parent: `/design-language/logo/`,
            order: 0,
          },
          {
            title: `Guidelines`,
            path: `/design-language/guidelines/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Accessibility`,
            path: `/design-language/guidelines/accessibility/`,
            parent: `/design-language/guidelines/`,
            order: 0,
          },
          {
            title: `User onboarding`,
            path: `/design-language/guidelines/onboarding-users/`,
            parent: `/design-language/guidelines/`,
            order: 0,
          },
          {
            title: `Notifications and permissions`,
            path: `/design-language/guidelines/notifications-and-permissions/`,
            parent: `/design-language/guidelines/`,
            order: 0,
          },
          {
            title: `Microcopy guidelines`,
            path: `/design-language/guidelines/microcopy-guidelines/`,
            parent: `/design-language/guidelines/`,
            order: 0,
          }
        ]
      },
      {
        title: `Product`,
        items: [
          {
            title: `Design tokens`,
            path: `/product/design-tokens/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Colour`,
            path: `/product/?path=/docs/tokens-colour--tokens`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Typography`,
            path: `/product/?path=/docs/tokens-typography--tokens`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Layout`,
            path: `/product/?path=/docs/tokens-spacing--tokens`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Spacing`,
            path: `/product/?path=/docs/tokens-spacing--tokens`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Depth`,
            path: `/product/design-tokens/depth/`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Animation`,
            path: `/product/design-tokens/animation/`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Borders`,
            path: `/product/design-tokens/borders/`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Iconography`,
            path: `/product/design-tokens/iconography/`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Empty states`,
            path: `/product/design-tokens/empty-states/`,
            parent: `/product/design-tokens/`,
            order: 0,
          },
          {
            title: `Elements`,
            path: `/product/elements/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Forms`,
            path: `/product/forms/`,
            parent: `/`,
            order: 1,
          },
          {
            title: `Components`,
            path: `/product/components/`,
            parent: `/`,
            order: 1,
          },
          {
            title: `Navigation`,
            path: `/product/components/#navigation`,
            parent: `/product/components/`,
            order: 1,
          },
          {
            title: `Content`,
            path: `/product/components/#content`,
            parent: `/product/components/`,
            order: 1,
          },
          {
            title: `Collabur patterns`,
            path: `/product/components/#patterns`,
            parent: `/product/components/`,
            order: 1,
          },
          {
            title: `Views`,
            path: `/product/views/`,
            parent: `/`,
            order: 2,
          }
        ]
      },
      {
        title: `Usage`,
        items: [
          {
            title: `For designers`,
            path: `/usage/designers/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Prototyping`,
            path: `/usage/designers/prototyping/`,
            parent: `/usage/designers/`,
            order: 0,
          },
          {
            title: `Design process`,
            path: `/usage/developers/design-process/`,
            parent: `/usage/designers/`,
            order: 0,
          },
          {
            title: `Extend and maintain model`,
            path: `/usage/developers/extend-and-maintain/`,
            parent: `/usage/designers/`,
            order: 0,
          },
          {
            title: `Contribution guidelines`,
            path: `/usage/designers/contribution/`,
            parent: `/usage/designers/`,
            order: 0,
          },
          {
            title: `For developers`,
            path: `/usage/developers/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Getting started`,
            path: `/usage/developers/getting-started/`,
            parent: `/usage/developers/`,
            order: 0,
          },
          {
            title: `Consumption methods`,
            path: `/usage/developers/consumption-methods/`,
            parent: `/usage/developers/`,
            order: 0,
          },
          {
            title: `Contribution guidelines`,
            path: `/usage/developers/contribution-guidelines/`,
            parent: `/usage/developers/`,
            order: 0,
          },
          {
            title: `Release process`,
            path: `/usage/developers/getting-started/`,
            parent: `/usage/developers/`,
            order: 0,
          },
          {
            title: `For partners`,
            path: `/usage/partners/`,
            parent: `/`,
            order: 0,
          },
          {
            title: `Benefits`,
            path: `/usage/partners/benefits/`,
            parent: `/usage/partners/`,
            order: 0,
          },
          {
            title: `APIs`,
            path: `/usage/partners/apis/`,
            parent: `/usage/partners/`,
            order: 0,
          },
          {
            title: `Access`,
            path: `/usage/partners/access/`,
            parent: `/usage/partners/`,
            order: 0,
          }
        ]
      },
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: process.env.AWS_S3_BUCKET || `collabur-ds-test`,
        region: 'ap-southeast-2',
        mergeCachingParams: true,
        generateRoutingRules: true,
        generateRedirectObjectsForPermanentRedirects: true,
        generateIndexPageForRedirect: true,
        removeNonexistentObjects: false
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`
  ],
}

console.log('Gatsby Config:', JSON.stringify(config))

module.exports = config
