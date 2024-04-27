import { NextRequest, userAgent } from 'next/server'

export function getLayoutApp(request: NextRequest) {
    const { device } = userAgent(request)
    const mobile = ['mobile', 'tablet']
    const viewport =
        device.type && mobile.includes(device.type) ? 'mobile' : 'desktop'
    return viewport
}
