import { ReplaySubject } from 'rxjs'
import { createLogger, format, transports } from 'winston'

import path from 'node:path'
import url from 'node:url'
import { getEnv } from './env.js'

export type LogIdentifier = {
  name?: 'gogoanime' | 'mangakakalot'
  type: 'anime' | 'manga' | 'html' | 'altTitles' | 'authors' | 'genre'
  kind: 'scrapper' | 'utils' | 'model' | 'cache' | 'controller'
}

export class Logger {
  protected logger
  rpSubject
  constructor(identifier: LogIdentifier) {
    this.rpSubject = new ReplaySubject<string>(500)

    const dirname = path.join(
      url.fileURLToPath(new URL('.', import.meta.url)),
      `../logs/${identifier.type}/${
        identifier.name ? `${identifier.name}/` : ''
      }${identifier.kind}`
    )

    this.logger = createLogger({
      format: format.combine(
        format.label({
          label: `${identifier.type}|${identifier.kind}${
            identifier.name ? `|${identifier.name}` : ''
          }`
        }),
        format.timestamp({ format: 'MM-DD hh:mm:ss.SSS A' }),
        format.printf(({ level, message, label, timestamp }) => {
          const msg = `${timestamp} [${label}] ${level}: ${message}`

          this.rpSubject.next(msg)
          return msg
        })
      ),
      transports: [
        new transports.File({
          level: 'error',
          dirname,
          filename: 'error.log'
        }),
        new transports.File({
          level: 'debug',
          dirname,
          filename: 'logs.log'
        }),
        new transports.Console({
          level: getEnv('LOG_LEVEL').toLocaleLowerCase()
        })
      ]
    })
  }
}
