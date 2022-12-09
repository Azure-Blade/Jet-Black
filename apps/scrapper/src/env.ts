import { config } from 'dotenv'
import { z } from 'zod'

export const envValidator = z.object({
  MONGODB_HOSTNAME: z.string().url(),
  MONGODB_USER: z.string(),
  MONGODB_PASSWORD: z.string(),
  MONGODB_OPTIONS: z.string().optional(),

  CONSUMET_URL: z.string().url(),

  GOGOANIME_URL: z.string().url(),

  MANGAKAKALOT_URL: z.string().url(),
  MANGANATO_URL: z.string().url(),
  CHAPMANGANATO_URL: z.string().url(),

  WATCH_INTERVAl: z.string().regex(/^\d+$/).transform(Number),
  INDEX: z.enum(['true', 'false']),
  LOG_LEVEL: z.enum(['DEBUG', 'INFO', 'ERROR', 'CRITICAL']),
  NODE_ENV: z.enum(['development', 'production'])
})

export type EnvVars = z.infer<typeof envValidator>

const envVars = envValidator.parse(config().parsed)

export const getEnv = <T extends keyof EnvVars>(env: T) =>
  envVars[env] as EnvVars[T]
