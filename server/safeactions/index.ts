import { DEFAULT_SERVER_ERROR, createSafeActionClient } from 'next-safe-action'
import { AuthApiError } from "@supabase/supabase-js"
export const action = createSafeActionClient({
    handleReturnedServerError(e) {
        if (e instanceof AuthApiError) {
            return e.message
        }
        return DEFAULT_SERVER_ERROR
    },
})
