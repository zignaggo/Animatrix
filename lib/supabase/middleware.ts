import { createServerClient, CookieOptions } from '@supabase/ssr'
import { NextResponse, NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
    let response = NextResponse.next({
        request: {
            headers: request.headers,
        },
    })
    const secureOptions = { }
    const supabase = createServerClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
        {
            cookies: {
                get(name: string) {
                    return request.cookies.get(name)?.value
                },
                set(name: string, value: string, options: CookieOptions) {
                    const cookieSetValues = {
                        name,
                        value,
                        ...options,
                        ...secureOptions,
                    }
                    request.cookies.set(cookieSetValues)
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set(cookieSetValues)
                },
                remove(name: string, options: CookieOptions) {
                    const cookieSetValue = {
                        name,
                        value: '',
                        ...options,
                        ...secureOptions,
                    }
                    request.cookies.set(cookieSetValue)
                    response = NextResponse.next({
                        request: {
                            headers: request.headers,
                        },
                    })
                    response.cookies.set(cookieSetValue)
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
