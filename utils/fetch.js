import unfetch from 'isomorphic-unfetch'

const cache = {}
const MAX_TIME = 24 * 60 * 10 * 1000 // 24 hours

const fetch = async url => {
  const now = new Date()

  if (cache[url] && now - cache[url].timestamp > MAX_TIME) {
    console.log('Cache obsolete, deleting')
    cache[url] = null
  }

  if (cache[url]) {
    console.log('Loading from cache')
    return cache[url].json
  }

  const response = await unfetch(url)
  const json = response.json()
  console.log('Loading from API')
  cache[url] = {
    json,
    timestamp: new Date()
  }
  return json
}

export default fetch
