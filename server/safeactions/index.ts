import { FirebaseError } from 'firebase/app'
import { DEFAULT_SERVER_ERROR, createSafeActionClient } from 'next-safe-action'
export const action = createSafeActionClient({
    handleReturnedServerError(e) {
        if (e instanceof FirebaseError) {
            return e.message
        }
        return DEFAULT_SERVER_ERROR
    },
})
