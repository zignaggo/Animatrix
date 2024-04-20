'use server'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firabase/config'
import { action } from '@/server/safeactions'
import { signSchema } from './schema'

export const signInSafer = action(signSchema, async (data) => {
    const response = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
    )
    return JSON.stringify(response)
})
