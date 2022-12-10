import cheerio from 'cheerio'
import { htmlCollection } from './database/pocketbase.js'
import { getEnv } from './env.js'
import { HTMLCollection } from './types.js'

const USE_CACHE = getEnv('USE_CACHE') === 'true'

export const urlToCheery = async (url: URL) => {
  if (USE_CACHE) {
    try {
      const { html } = await htmlCollection.getFirstListItem<HTMLCollection>(
        `url="${url}"`
      )
      return cheerio.load(html)
    } catch (error) {}
  }
  const res = await retry(async () => await fetch(url))
  const html = await res.text()
  return cheerio.load(html)
}

export const retry = async <T>(task: () => T) => {
  for (let i = 0; i < getEnv('MAX_RETRY_COUNT'); i++) {
    try {
      return await task()
    } catch (error) {
      // Log this error here maybe
    }
  }
  throw new Error('Cannot finish ')
}

export const sleep = async (time: number) =>
  new Promise(resolve => setTimeout(resolve, time))
