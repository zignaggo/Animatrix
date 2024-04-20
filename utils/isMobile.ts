import { NextRequest, NextResponse, userAgent } from 'next/server'

export function setMobileChecker(request: NextRequest) {
    const { device } = userAgent(request)
    const mobile = ['mobile', 'tablet']
    const viewport =
        device.type && mobile.includes(device.type) ? 'mobile' : 'desktop'
    const response = NextResponse.next()
    response.headers.set('viewport', viewport)
    return response
}
