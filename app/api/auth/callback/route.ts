import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)
    const code = searchParams.get('code')
    const next = searchParams.get('next') ?? '/'
    const _error = searchParams.get('error')
    if (_error) {
        return NextResponse.redirect(`${origin}/auth/sign/?error=${_error}`)
    }
    if (code) {
        const supabase = createClient()
        const { error } = await supabase.auth.exchangeCodeForSession(code)
        if (!error) {
            return NextResponse.redirect(`${origin}${next}`)
        }
    }
    return NextResponse.redirect(`${origin}/auth/sign`)
}
