import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { DEFAULT_LOCALE, locales } from './i18n/config'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip internal paths
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return
  }

  // If already has locale, skip
  const hasLocale = locales.some(locale =>
    pathname.startsWith(`/${locale}`)
  )

  if (!hasLocale) {
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url)
    )
  }
}
