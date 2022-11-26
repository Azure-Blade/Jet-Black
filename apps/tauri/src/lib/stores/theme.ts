import { writable } from 'svelte/store'
import type { Theme } from '$types'

const createThemeStore = () => {
  let theme = localStorage.getItem('theme') as Theme | null
  if (!theme) {
    theme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
    localStorage.setItem('theme', theme)
  }

  const { subscribe, update, set } = writable(theme)

  return {
    subscribe,
    toggleTheme: () => {
      update(currentTheme => {
        console.log('Current theme is ', currentTheme)
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
        console.log('New theme is', newTheme)
        localStorage.setItem('theme', newTheme)
        return newTheme
      })
    }
  }
}
export const theme = createThemeStore()
