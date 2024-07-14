import { z } from 'zod'

export const deleteProfileSchema = z.object({
    id: z.number(),
})
