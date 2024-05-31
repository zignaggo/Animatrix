import { NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { cookies } from 'next/headers'
import { redirectTo, publicRoutes } from '@/utils'

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicRoute = publicRoutes.includes(path)
    const isProfileRoute = path.includes('-profile')
    const { auth, response } = await updateSession(request)
    const isSelectedProfile = cookies().get('profile')?.value
    const isAuth = auth.data?.user
    if (auth.error && !isPublicRoute) {
        return redirectTo(request, '/auth/sign')
    }
    if (isAuth) {
        if (
            isPublicRoute ||
            (isSelectedProfile && path === '/choose-profile')
        ) {
            return redirectTo(request, '/animes')
        }
        if (!isSelectedProfile && !isProfileRoute) {
            return redirectTo(request, '/choose-profile')
        }
    }
    return response
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png|favicon.ico$).*)'],
}
