const path = require('path')


exports.createPages = async ({ graphql, actions, reporter  }) => {
  const { createPage } = actions
  const artistsPage = path.resolve('./src/templates/artist.js')
  const oldEventPage = path.resolve('./src/templates/old-events.js')
  const newEventPage = path.resolve('./src/templates/new-events.js')
  const result =  await graphql(
    `
      {
        allContentfulPersonCard(filter: {nameBlock: {eq: "person"}}) {
          nodes {
            slug
            namePersone
          }
        }
        newEvents: allContentfulCardEvent(filter: {nameBlock: {eq: "CardNewEvent"}}) {
          nodes {
            slug
            nameEvent
          }
        }
        oldEvents: allContentfulCardEvent(filter: {nameBlock: {eq: "CardOldEvents"}}){
          nodes {
            slug
            nameEvent
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
  const eventsOld = result.data.oldEvents.nodes;
  const eventsNew = result.data.newEvents.nodes;
  
  if (artists.length > 0) {
    artists.forEach((artist, index) => {
      const previousArtistSlug = index === 0 ? null : artists[index - 1].slug
      const nextArtistSlug = index === artists.length - 1 ? null : artists[index + 1].slug
      createPage({
        path: `/team/${artist.slug}`,
        component: artistsPage,
        context: {
          slug: artist.slug,
          previousArtistSlug: previousArtistSlug,
          nextArtistSlug: nextArtistSlug,
        },
      })
    })
  }
  
  if (eventsOld.length > 0) {
    eventsOld.forEach((eventData, index) => {
      const previousEventSlug = index === 0 ? null : eventsOld[index - 1].slug
      const nextEventSlug = index === eventsOld.length - 1 ? null : eventsOld[index + 1].slug
      createPage({
        path: `/old-events/${eventData.slug}`,
        component: oldEventPage,
        context: {
          slug: eventData.slug,
          previousPostSlug: previousEventSlug,
          nextPostSlug: nextEventSlug,
        },
      })
    })
  }

  if (eventsNew.length > 0) {
    eventsNew.forEach((eventData, index) => {
      const previousEventSlug = index === 0 ? null : eventsNew[index - 1].slug
      const nextEventSlug = index === eventsNew.length - 1 ? null : eventsNew[index + 1].slug
      createPage({
        path: `/new-events/${eventData.slug}`,
        component: newEventPage,
        context: {
          slug: eventData.slug,
          previousPostSlug: previousEventSlug,
          nextPostSlug: nextEventSlug,
        },
      })
    })
  }
}
