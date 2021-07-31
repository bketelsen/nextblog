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
