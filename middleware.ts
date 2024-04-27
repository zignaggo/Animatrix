import { NextRequest } from 'next/server'
import { getLayoutApp } from './utils/isMobile'
import { Home, isAuthenticated, isNotAuthenticated, publicRoutes, updateSession } from '@/supabase/middleware'
export async function middleware(request: NextRequest) {
    
    const path = request.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const layout = getLayoutApp(request)
    const { auth, response } = await updateSession(request)
    response.headers.set('layout', layout)
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
