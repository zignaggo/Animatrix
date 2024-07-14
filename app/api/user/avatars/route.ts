import { getAvatars } from '@/components/pages/profiles/mutations/server'
import { NextResponse } from 'next/server'

export async function GET() {
    const avatars = await getAvatars()
    return NextResponse.json(avatars)
}
