import { NextResponse, type NextRequest } from 'next/server'
import { setMobileChecker } from './utils/isMobile'
import { cookies } from 'next/headers'
import { createI18nMiddleware } from 'next-international/middleware'
const publicRoutes = ['/auth/sign', '/auth/register']

const I18nMiddleware = createI18nMiddleware({
    locales: ['pt'],
    defaultLocale: 'pt',
    urlMappingStrategy: 'rewrite'
})

export function middleware(request: NextRequest) {
    setMobileChecker(request)
    const path = request.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const cookie = cookies().get('session')?.value
    if (path === "/") {
        return NextResponse.redirect(new URL('/animes', request.nextUrl))
    }
    if (!cookie) {
        return NextResponse.redirect(new URL('/auth/sign', request.nextUrl))
    }
    if (isPublicRoute && cookie) {
        return NextResponse.redirect(new URL('/animes', request.nextUrl))
    }

    return I18nMiddleware(request)
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
