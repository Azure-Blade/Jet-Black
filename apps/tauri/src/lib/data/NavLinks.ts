import type { NavLink } from '$types'

export const navLinks: NavLink[] = [
  {
    content: {
      text: 'Home'
    },
    target: {
      href: '/',
      newTab: false
    }
  },

  {
    content: {
      text: 'Versions'
    },
    target: {
      href: '/versions',
      newTab: false
    }
  }
]
