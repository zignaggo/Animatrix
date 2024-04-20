import { NextResponse, type NextRequest } from 'next/server'
import { setMobileChecker } from './utils/isMobile'
import { cookies } from 'next/headers'

const protectedRoutes = ['/animes', '/calendar', '/profiles']
const publicRoutes = ['/auth/sign', '/auth/register']

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

    const response = setMobileChecker(request)
    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
