import { NextRequest } from 'next/server'
import { Home, isAuthenticated, isNotAuthenticated, publicRoutes, updateSession } from '@/supabase/middleware'
export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const { auth, response } = await updateSession(request)
    if (auth.error && !isPublicRoute) {
        return isNotAuthenticated(request);
    }
    if (auth.data.user && isPublicRoute) {
        return isAuthenticated(request);
    }
    if (path === '/') {
        return Home(request)
    }
    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
