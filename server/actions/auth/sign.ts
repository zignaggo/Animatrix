import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firabase/config'
import * as z from 'zod'
import { createSafeActionClient } from 'next-safe-action'
import { FirebaseError } from 'firebase/app'

export const signSchema = z.object({
    email: z
        .string({ required_error: 'Email é obrigatório' })
        .email({
            message: 'Email inválido',
        })
        .max(256, { message: 'Máximo de 256 caracteres' }),
    password: z
        .string({ required_error: 'Senha é obrigatório' })
        .max(256, { message: 'Máximo de 256 caracteres' }),
})

export const action = createSafeActionClient()
export const signInSafer = action(signSchema, async (data) => {
    try {
        const response = await signInWithEmailAndPassword(
            auth,
            data.email,
            data.password
        )
        return { success: response }
    } catch (error) {
        if (error instanceof FirebaseError) {
            return { error: error.message }
        }
        return { error: 'Desconhecido' }
    }
})
