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
      text: 'About'
    },
    target: {
      href: '/about',
      newTab: false
    }
  },

  {
    content: {
      text: 'Contact'
    },
    target: {
      href: '/contact',
      newTab: false
    }
  }
]
