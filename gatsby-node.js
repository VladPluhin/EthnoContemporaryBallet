const path = require('path')


exports.createPages = async ({ graphql, actions, reporter  }) => {
  const { createPage } = actions
  const artistsPage = path.resolve('./src/templates/artist.js')
  const result =  await graphql(
    `
      {
        allContentfulPersonCard(filter: {nameBlock: {eq: "person"}}) {
          nodes {
            slug
            namePersone
          }
        }
      }
  `)
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const artists = result.data.allContentfulPersonCard.nodes

  if (artists.length > 0) {
    artists.forEach((artist, index) => {
      const previousArtistSlug = index === 0 ? null : artists[index - 1].slug
      const nextArtistSlug = index === artists.length - 1 ? null : artists[index + 1].slug
      createPage({
        path: `/team/${artist.slug}`,
        component: artistsPage,
        context: {
          slug: artist.slug,
          previousPostSlug: previousArtistSlug,
          nextPostSlug: nextArtistSlug,
        },
      })
    })
  }

}
