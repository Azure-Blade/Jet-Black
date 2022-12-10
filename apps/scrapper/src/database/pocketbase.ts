import Pocketbase from 'pocketbase'
import { getEnv } from '../env.js'

const pb = new Pocketbase(getEnv('POCKETBASE_URL'))

await pb.admins.authWithPassword(
  getEnv('POCKETBASE_EMAIL'),
  getEnv('POCKETBASE_PASSWORD')
)

pb.autoCancellation(false)

export const htmlCollection = pb.collection('html')
export const mangaCollection = pb.collection('manga')
export const animeCollection = pb.collection('anime')
export const genreCollection = pb.collection('genre')
