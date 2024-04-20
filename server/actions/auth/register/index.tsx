'use server'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { registerSchema } from "./schema"
import { action } from "@/server/safeactions"
import { auth } from "@/app/firabase/config"

export const createSafeUser = action(registerSchema, async (data) => {
    const response = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
    )
    return JSON.stringify(response)
})
