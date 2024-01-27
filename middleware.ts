import { NextResponse, userAgent } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const url = request.nextUrl
    /*Redirect to /Animes */
    const path = request.nextUrl.pathname
    if (path === '/') {
        NextResponse.rewrite(url)
        return NextResponse.redirect(new URL('/animes', url))
    }
    const { device } = userAgent(request)
    const mobile = ['mobile', 'tablet']
    const viewport =
        device.type && mobile.includes(device.type) ? 'mobile' : 'desktop'
    const response = NextResponse.next()
    response.cookies.set('viewport', viewport)
    return response
}
