export type Resource = {
  title: string
  url: URL
}
export interface DBMeta {
  collectionId: string
  collectionName: string
  updated: string
  created: string
  id: string
  expand: {}
}

export type InsertableHTML = {
  url: URL
  html: string
}
export type HTMLCollection = InsertableHTML & DBMeta
