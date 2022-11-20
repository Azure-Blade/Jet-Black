import { Store } from 'tauri-plugin-store-api'
import { writable } from 'svelte/store'
import type { Theme } from '$types'

// TODO:Consider using localStorage instead of the store plugin
const store = new Store('.settings.dat')

const createThemeStore = () => {
  const { subscribe, update, set } = writable('')

  return {
    subscribe,
    toggleTheme: () => {
      update(currentTheme => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        store.set('theme', newTheme)
        return newTheme
      })
    },
    load: async () => {
      let storedTheme = (await store.get('theme')) as Theme | null
      if (!storedTheme) {
        storedTheme = 'dark'
        store.set('theme', storedTheme)
      }
      set(storedTheme)
    }
  }
}
export const theme = createThemeStore()
