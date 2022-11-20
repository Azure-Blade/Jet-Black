import type { Handle } from '@sveltejs/kit'
import z from 'zod'
import type { Theme } from './types'

const themeValidator = z.enum(['dark', 'light'])

const validateTheme = (theme: unknown): theme is Theme => {
  const validationResult = themeValidator.safeParse(theme)
  return validationResult.success
}

export const handle: Handle = async ({ event, resolve }) => {
  const theme = event.cookies.get('theme')
  if (validateTheme(theme)) {
    event.locals.theme = theme
  } else event.locals.theme = null

  return resolve(event, {
    transformPageChunk: ({ html }) =>
      html.replaceAll('$theme$', event.locals.theme || '')
  })
}
