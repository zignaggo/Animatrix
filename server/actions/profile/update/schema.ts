import { z } from 'zod'

export const updateProfileSchema = z.object({
    id: z.number(),
    language: z.string(),
    name: z
        .string({ required_error: 'Nome do perfil é obrigatório' })
        .max(64, { message: 'Máximo de 64 caracteres' }),
    selected_avatar: z.number().optional().nullable(),
})
