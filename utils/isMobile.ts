import { NextRequest, NextResponse, userAgent } from 'next/server'

export function setMobileLayout(response: NextResponse, request: NextRequest) {
    const { device } = userAgent(request)
    const mobile = ['mobile', 'tablet']
    const viewport =
        device.type && mobile.includes(device.type) ? 'mobile' : 'desktop'
    response.headers.set('viewport', viewport)
    return response
}
