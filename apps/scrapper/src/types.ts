import { z } from 'zod'
import { validator as mangaInfoValidator } from './validators/mangainfo.js'

export type Resource = {
  title: string
  url: URL
}

export type MangaInfo = z.infer<typeof mangaInfoValidator>
