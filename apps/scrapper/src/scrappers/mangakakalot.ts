import { Resource } from '../types.js'
import { BaseScrapper } from './baseScrapper.js'
import { retry, urlToCheery } from '../utils.js'
import { getEnv } from '../env.js'

export type MangaInfo = {}

export class MangakakalotScrapper extends BaseScrapper {
  constructor() {
    super({
      kind: 'scrapper',
      type: 'manga',
      name: 'mangakakalot'
    })
  }

  public async scrapePage(page: number) {
    return ['']
  }

  public async scrapeLatest() {
    const url = new URL(getEnv('MANGANATO_URL'))

    const $ = await urlToCheery(url)
    const mangas: Resource[] = []

    const result = $('div.panel-content-homepage>div.content-homepage-item')

    result.each((_, element) => {
      const title = $(element)
        .find('div.content-homepage-item-right>h3.item-title>a')
        .text()
        .trim()
      const url = $(element)
        .find('div.content-homepage-item-right>h3.item-title>a')
        .attr('href')

      if (!url || !title) {
        return
      }
      try {
        let manga: Resource = {
          title,
          url: new URL(url)
        }

        mangas.push(manga)
      } catch (error) {}
    })

    return mangas
  }

  private async mangaInfo(resource: Resource) {
    const id = resource.url.href.split('/')[3]
    const url = `${getEnv('CONSUMET_URL')}/manga/mangakakalot/info?id=${id}`

    const res = await retry(async () => {
      return await fetch(url)
    }, getEnv('MAX_RETRY_COUNT'))
  }
}
