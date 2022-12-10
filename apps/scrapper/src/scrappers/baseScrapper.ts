import { Logger, LogIdentifier } from '../logger.js'

export abstract class BaseScrapper extends Logger {
  constructor(identifier: LogIdentifier) {
    super(identifier)
  }

  public abstract scrapePage(page: number): Promise<unknown[]>
  public abstract scrapeLatest(): Promise<unknown[]>
}
