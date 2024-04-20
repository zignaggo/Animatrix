'use server'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firabase/config'
import { action } from '@/server/safeactions'
import { signSchema } from './schema'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const signInSafer = action(signSchema, async (data) => {
    const { user } = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
    )
    const expiresAt = new Date(Date.now() + 1 * 60 * 60 * 1000) // 1 hora
    cookies().set('session', user.refreshToken, {
        httpOnly: true,
        secure: true,
        expires: expiresAt,
        sameSite: 'lax',
        path: '/',
    })
    redirect('/animes')
})
