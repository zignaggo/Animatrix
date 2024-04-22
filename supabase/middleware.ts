import { createServerClient, CookieOptions } from '@supabase/ssr'
import { NextResponse, NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })

    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value,
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                },
            },
        }
    )

    const auth = await supabase.auth.getUser()
    return { response, auth }
}

export const publicRoutes = ['/auth/sign', '/auth/register']
export const isNotAuthenticated = (request: NextRequest) =>
    NextResponse.redirect(new URL('/auth/sign', request.nextUrl))
export const isAuthenticated = (request: NextRequest) =>
    NextResponse.redirect(new URL('/animes', request.nextUrl))
export const Home = (request: NextRequest) =>
    NextResponse.redirect(new URL('/animes', request.nextUrl))
