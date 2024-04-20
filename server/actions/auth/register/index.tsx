import { createUserWithEmailAndPassword } from "firebase/auth"
import { registerSchema } from "./schema"
import { action } from "@/server/safeactions"
import { auth } from "@/app/firabase/config"

export const createSafeUser = action(registerSchema, async (data) => {
    if (!data) return { error: 'Não foi possível se cadastrar.' }
    const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
    )
    return { success: response }
})
