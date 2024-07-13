import { getAvatars } from '@/components/pages/profiles/mutations/server'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const {searchParams } = new URL(req.url)
    const all = searchParams.get('all')
    const avatars = await getAvatars(!!all)
    return NextResponse.json(avatars)
}
