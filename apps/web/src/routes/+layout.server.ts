import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = ({ locals: { theme } }) => {
  return {
    theme
  }
}
