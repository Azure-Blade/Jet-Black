import { MangakakalotScrapper } from '../../src/scrappers/mangakakalot'
import { describe, expect, it } from 'vitest'

describe('scrapper mangakakalot', () => {
  const scrapper = new MangakakalotScrapper()

  it('latest should give an array of mangaInfo', async () => {
    const result = await scrapper.scrapeLatest()
  })
})
