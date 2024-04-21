import { NextResponse, type NextRequest } from 'next/server'
import { setMobileChecker } from './utils/isMobile'
import { cookies } from 'next/headers'
import { createI18nMiddleware } from 'next-international/middleware'
const protectedRoutes = ['/animes', '/calendar', '/profiles']
const publicRoutes = ['/auth/sign', '/auth/register']

const I18nMiddleware = createI18nMiddleware({
    locales: ['pt'],
    defaultLocale: 'pt',
})

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isProtectedRoute = protectedRoutes.includes(path)
    const isPublicRoute = publicRoutes.includes(path)

    const cookie = cookies().get('session')?.value

    if (isProtectedRoute && !cookie) {
        return NextResponse.redirect(new URL('/auth/sign', request.nextUrl))
    }
    if (isPublicRoute && cookie) {
        return NextResponse.redirect(new URL('/animes', request.nextUrl))
    }

    setMobileChecker(request)
    return I18nMiddleware(request)
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)'],
}
