import { NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { cookies } from 'next/headers'
import { redirectTo, publicRoutes } from '@/utils'

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const isProfileRoute = path.includes('-profile')
    const { auth, response } = await updateSession(request)
    const wasSelectedProfile = cookies().get('profile')?.value
    const isAuth = auth.data?.user
    if (!isAuth && !isPublicRoute) {
        return redirectTo(request, '/auth/sign')
    }
    if (isAuth) {
        if (isPublicRoute) {
            return redirectTo(request, '/animes')
        }
        if (!wasSelectedProfile && !isProfileRoute && !isPublicRoute) {
            return redirectTo(request, '/choose-profile')
        }
    }
    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png|favicon.ico$).*)'],
}
