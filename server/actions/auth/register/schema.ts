import * as z from 'zod'

export const registerSchema = z
    .object({
        username: z
            .string({ required_error: 'Nome de usuário é obrigatório' })
            .min(4, {
                message: 'Mínimo de 4 caracteres',
            })
            .max(256, { message: 'Máximo de 256 caracteres' }),
        email: z
            .string({ required_error: 'E-mail é obrigatório' })
            .email({
                message: 'Email inválido',
            })
            .max(256, { message: 'Máximo de 256 caracteres' }),
        password: z
            .string({ required_error: 'Senha é obrigatório' })
            .min(6, {
                message: 'Mínimo de 6 caracteres',
            })
            .max(256, { message: 'Máximo de 256 caracteres' }),
        confirmPassword: z
            .string({ required_error: 'Confirmar senha é obrigatório' })
            .min(2, {
                message: 'Username must be at least 2 characters.',
            })
            .max(256, { message: 'Máximo de 256 caracteres' }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas não conferem',
        path: ['confirmPassword'],
    })
