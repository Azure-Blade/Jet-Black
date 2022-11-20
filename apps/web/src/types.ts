export * from 'types'
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'

export const themes = ['dark', 'light'] as const
export type Theme = typeof themes[number]

export type NavLink = {
  target: {
    href: string
    newTab?: boolean
  }
  content: {
    text?: string
    icon?: IconDefinition
  }
}
