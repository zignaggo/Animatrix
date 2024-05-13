import { createServerClient, CookieOptions } from '@supabase/ssr'
import { NextResponse, NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })
    const secureOptions = { httpOnly: true, secure: true }
    const supabase = createServerClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_ANON_KEY!,
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
                        ...secureOptions,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value,
                        ...options,
                        ...secureOptions,
                    })
                },
                remove(name: string, options: CookieOptions) {
                    request.cookies.set({
                        name,
                        value: '',
                        ...options,
                        ...secureOptions,
                    })
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set({
                        name,
                        value: '',
                        ...options,
                        ...secureOptions,
                    })
                },
            },
        }
    )
    const auth = await supabase.auth.getUser()
    return { response, auth }
}

export const publicRoutes = ['/auth/sign', '/auth/register']
export const redirectToLogin = (request: NextRequest) =>
    NextResponse.redirect(new URL('/auth/sign', request.nextUrl))
export const redirectToHome = (request: NextRequest) =>
    NextResponse.redirect(new URL('/animes', request.nextUrl))
export const redirectToCProfile = (request: NextRequest) =>
    NextResponse.redirect(new URL('/choose-profile', request.nextUrl))
