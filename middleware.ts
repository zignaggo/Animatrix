import { NextRequest } from 'next/server'
import { getLayoutApp } from './utils/isMobile'
import {
    publicRoutes,
    redirectToCProfile,
    redirectToHome,
    redirectToLogin,
    updateSession,
} from '@/supabase/middleware'
import { cookies } from 'next/headers'
export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const isProfileRoute = path.includes('-profile')
    const layout = getLayoutApp(request)
    const { auth, response } = await updateSession(request)
    const isSelectedProfile = cookies().get('profile')?.value
    const isAuth = auth.data?.user
    if (auth.error && !isPublicRoute) {
        return redirectToLogin(request)
    }
    if (isAuth) {
        if (isPublicRoute) {
            return redirectToHome(request)
        }
        if (!isSelectedProfile && !isProfileRoute) {
            return redirectToCProfile(request)
        }
        if (isSelectedProfile && path === '/choose-profile') {
            return redirectToHome(request)
        }
        if (path === '/') {
            return redirectToHome(request)
        }
    }
    response.headers.set('layout', layout)
    return response
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|.*\\.png|favicon.ico$).*)',
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}
