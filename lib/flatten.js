import { getRecord } from './mdx'

export async function flatten(folder, data) {
  var newdata = {}
  switch (folder) {
    case 'articles.json':
      newdata = await flattenArticle(data)
      break
    case 'appearances.json':
      newdata = await flattenAppearance(data)
      break
    case 'authors.json':
      newdata = await flattenAuthor(data)
      break
    case 'categories.json':
      newdata = await flattenCategory(data)
      break
    case 'feeds.json':
      newdata = await flattenFeed(data)
      break
    case 'feeditems.json':
      newdata = await flattenFeedItem(data)
      break
    case 'guests.json':
      newdata = await flattenGuest(data)
      break
    case 'pages.json':
      newdata = await flattenPage(data)
      break
    case 'sections.json':
      newdata = await flattenSection(data)
      break
    case 'streams.json':
      newdata = await flattenStream(data)
      break
    case 'websites.json':
      newdata = await flattenWebsite(data)
      break
    default:
      return data
  }
  return newdata
}

export async function flattenArticle(article) {
  // author
  const author = await getRecord('authors', article.author_id)
  const flatAuthor = await flattenAuthor(author)
  article['author'] = flatAuthor

  // image?
  article.image_id && (article['image'] = await getRecord('images', article.image_id))

  return article
}

export async function flattenAppearance(appearance) {
  // author
  const author = await getRecord('authors', appearance.author_id)
  const flatAuthor = await flattenAuthor(author)
  appearance['author'] = flatAuthor
  // image?

  appearance.image_id && (appearance['image'] = await getRecord('images', appearance.image_id))
  const image = await getRecord('images', appearance.image_id)
  appearance['image'] = image
  return appearance
}

export async function flattenAuthor(author) {
  // image?
  author.image_id && (author['image'] = await getRecord('images', author.image_id))
  const image = await getRecord('images', author.image_id)
  author['image'] = image
  return author
}

export async function flattenCategory(category) {
  // image?
  category.image_id && (category['image'] = await getRecord('images', category.image_id))
  const image = await getRecord('images', category.image_id)
  category['image'] = image
  return category
}

export async function flattenFeed(feed) {
  // image?
  feed.image_id && (feed['image'] = await getRecord('images', feed.image_id))
  const image = await getRecord('images', feed.image_id)
  feed['image'] = image

  // author
  const author = await getRecord('authors', feed.author_id)
  const flatAuthor = await flattenAuthor(author)
  feed['author'] = flatAuthor
  return feed
}

export async function flattenFeedItem(feedItem) {
  // feed, image?, category?, author?
  const feed = await getRecord('feeds', feedItem.feed_id)
  const flatFeed = await flattenFeed(feed)
  feedItem['feed'] = flatFeed

  feedItem.image_id && (feedItem['image'] = await getRecord('images', feedItem.image_id))
  const image = await getRecord('images', feedItem.image_id)
  feedItem['image'] = image

  feedItem.category_id &&
    (feedItem['category'] = await getRecord('categories', feedItem.category_id))
  const category = await getRecord('categories', feedItem.category_id)
  feedItem['category'] = category

  feedItem.author_id && (feedItem['author'] = await getRecord('authors', feedItem.author_id))
  const author = await getRecord('authors', feedItem.author_id)
  const flatAuthor = await flattenAuthor(author)
  feedItem['author'] = flatAuthor

  return feedItem
}

export async function flattenGuest(guest) {
  // image?
  guest.image_id && (guest['image'] = await getRecord('images', guest.image_id))
  const image = await getRecord('images', guest.image_id)
  guest['image'] = image
  return guest
}

export async function flattenPage(page) {
  // image?
  page.image_id && (page['image'] = await getRecord('images', page.image_id))
  const image = await getRecord('images', page.image_id)
  page['image'] = image

  // section?
  page.section_id && (page['section'] = await getRecord('sections', page.section_id))
  const section = await getRecord('sections', page.section_id)
  const flatSection = await flattenSection(section)
  page['section'] = flatSection

  return page
}

export async function flattenSection(section) {
  // image?
  section.image_id && (section['image'] = await getRecord('images', section.image_id))
  const image = await getRecord('images', section.image_id)
  section['image'] = image
  return section
}

export async function flattenStream(stream) {
  // image?
  stream.image_id && (stream['image'] = await getRecord('images', stream.image_id))
  const image = await getRecord('images', stream.image_id)
  stream['image'] = image

  // author
  const author = await getRecord('authors', stream.author_id)
  const flatAuthor = await flattenAuthor(author)
  stream['author'] = flatAuthor

  // category?
  stream.category_id && (stream['category'] = await getRecord('categories', stream.category_id))
  const category = await getRecord('categories', stream.category_id)
  const flatCategory = await flattenCategory(category)
  stream['category'] = flatCategory

  return stream
}

export async function flattenWebsite(website) {
  // author
  const author = await getRecord('authors', website.author_id)
  const flatAuthor = await flattenAuthor(author)
  website['author'] = flatAuthor

  return website
}
