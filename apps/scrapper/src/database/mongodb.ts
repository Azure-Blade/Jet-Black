import { MongoClient } from 'mongodb'
import { getEnv } from '../env.js'

const mongodbUrl = `mongodb://${getEnv('MONGODB_USER')}:${getEnv(
  'MONGODB_PASSWORD'
)}@${getEnv('MONGODB_HOSTNAME')}/${getEnv('MONGODB_OPTIONS')}`

const client = new MongoClient(mongodbUrl)

await client.connect()

const db = client.db(`jet-black-${getEnv('NODE_ENV')}`)

export const mangaCollection = db.collection('manga')
export const animeCollection = db.collection('anime')
export const fictionCollection = db.collection('fiction')
