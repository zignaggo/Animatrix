import { NextResponse, type NextRequest } from 'next/server'
import { setMobileLayout } from './utils/isMobile'
import { cookies } from 'next/headers'
import { createI18nMiddleware } from 'next-international/middleware'

const publicRoutes = ['/auth/sign', '/auth/register']
const protectedRoutes = ['/animes', '/calendar', '/profiles', '/']

const I18nMiddleware = createI18nMiddleware({
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    urlMappingStrategy: 'rewrite',
})

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const i18n = I18nMiddleware(request)
    const isPublicRoute = publicRoutes.includes(path)
    const isProtectedRoute = protectedRoutes.includes(path)
    const cookie = cookies().get('session')?.value
    if (isProtectedRoute && !cookie) {
        return NextResponse.redirect(new URL('/auth/sign', request.nextUrl))
    }
    if ((isPublicRoute && cookie) || path === '/') {
        return NextResponse.redirect(new URL('/animes', request.nextUrl))
    }
    return setMobileLayout(i18n, request)
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
