export function getDataURL(path = '') {
  return `${process.env.NEXT_DATA_URL || 'https://data.brian.dev/data/'}${path}`
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getDataURL(path)
  const response = await fetch(requestUrl)
  const data = await response.json()
  return data
}
