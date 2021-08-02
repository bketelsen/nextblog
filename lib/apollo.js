// ./apollo-client.js

import { ApolloClient, InMemoryCache } from '@apollo/client'

import { gql } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api.brian.dev/graphql/ui',
  cache: new InMemoryCache(),
})
export function dateSortDesc(a, b) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getAllPostsFrontmatter() {
  const { data } = await client.query({
    query: gql`
      {
        allArticles {
          id
          title
          publish_date
          excerpt
          tags
        }
      }
    `,
  })
  var posts = [...data.allArticles]
  posts.sort((a, b) => dateSortDesc(a.publish_date, b.publish_date))
  return posts
}

export async function getPostByID(id) {
  const { data } = await client.query({
    query: gql`
      {
        Article(id: "${id}") {
          title
          body
          draft
          edit_description
          excerpt
          featured
          id
          last_edit_date
          publish_date
          tags
          profile {
            first_name
            last_name
            image {
              file_name
            }
            avatar {
              file_name
            }
            twitter
          }
        }
      }
    `,
  })
  var post = data.Article
  return post
}
export async function getAllAppearanceFrontmatter() {
  const { data } = await client.query({
    query: gql`
      {
        allAppearances {
          id
          title
          appearance_date
          excerpt
        }
      }
    `,
  })
  var appearances = [...data.allAppearances]
  appearances.sort((a, b) => dateSortDesc(a.appearance_date, b.appearance_date))
  return appearances
}

export async function getAppearanceByID(id) {
  const { data } = await client.query({
    query: gql`
      {
        Appearance(id: "${id}") {
          title
          body
          excerpt
          id
          appearance_date
          event_url
          host_name
          host_url
          slides_url
          video_url
          profile {
            first_name
            last_name
            image {
              file_name
            }
            avatar {
              file_name
            }
            twitter
          }
        }
      }
    `,
  })
  var appearance = data.Appearance
  return appearance
}
export async function getImageByID(id) {
  console.log('query:', id)
  const { data } = await client.query({
    query: gql`
      {
        Image(id: "${id}") {
          id
          file_name
          width
          height
          cdn
          alt_text
          caption
          attribution
          attribution_link
        }
      }
    `,
  })
  console.log('apollo:', id, data)
  var image = data.Image
  return image
}
export async function getAllImages() {
  const { data } = await client.query({
    query: gql`
      {
        allImages {
          id
          file_name
          width
          height
          cdn
          alt_text
          caption
          attribution
          attribution_link
        }
      }
    `,
  })
  var images = [...data.allImages]

  return images
}

export function getImageByIDSync(id) {
  console.log('sync-fetch', id)
  const fetch = require('sync-fetch')
  const query = `{
        Image(id: "${id}") {
          id
          file_name
          width
          height
          cdn
          alt_text
          caption
          attribution
          attribution_link
        }
    }
`
  const operation = {
    operationName: null,
    variables: {},
    query: query,
  }

  const data = fetch('https://api.brian.dev/graphql/ui', {
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(operation),
  }).json()
  return data.data.Image
}
