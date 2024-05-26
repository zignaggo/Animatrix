import z from 'zod'
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