import client from '@/lib/apollo'
import { dateSortDesc } from '@/lib/mdx'
import { gql } from '@apollo/client'

export async function getArticles() {
  var { data } = await client.query({
    query: gql`
      query {
        allArticles {
          id
          title
          summary
          featured
          draft
          date
          author_id
          image_id
          tags
          layout
          Image {
            file_name
            width
            height
            cdn
            id
          }
          Author {
            name
            company
          }
        }
      }
    `,
  })
  var allArticles = data.allArticles.map((x) => x)
  var sorted = allArticles.sort((a, b) => dateSortDesc(a.date, b.date))
  return sorted
}
export async function getArticle(id) {
  var { data } = await client.query({
    query: gql`
      query($id: ID!) {
        Article(id: $id) {
          title
          id
          summary
          featured
          draft
          date
          body
          author_id
          image_id
          tags
          layout
          Image {
            file_name
            width
            height
            cdn
            id
          }
          Author {
            name
            company
          }
        }
      }
    `,
    variables: { id: id },
  })
  return data.Article
}
export async function getAppearances() {
  var { data } = await client.query({
    query: gql`
      query {
        allAppearances {
          id
          title
          summary
          featured
          draft
          date
          author_id
          image_id
          tags
          Image {
            file_name
            width
            height
            cdn
            id
          }
          Author {
            name
            company
          }
        }
      }
    `,
  })
  var allAppearances = data.allAppearances.map((x) => x)
  var sorted = allAppearances.sort((a, b) => dateSortDesc(a.date, b.date))
  return sorted
}
export async function getAppearance(id) {
  var { data } = await client.query({
    query: gql`
      query($id: ID!) {
        Appearance(id: $id) {
          title
          id
          summary
          featured
          body
          draft
          date
          author_id
          image_id
          tags
          Image {
            file_name
            width
            height
            cdn
            id
          }
          Author {
            name
            company
          }
        }
      }
    `,
    variables: { id: id },
  })
  return data.Appearance
}
