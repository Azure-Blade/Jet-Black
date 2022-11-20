// Re-export everything from the types package
export * from 'types'

// Define any scoped types to this project here
import type { IconDefinition } from '@fortawesome/free-solid-svg-icons'

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
