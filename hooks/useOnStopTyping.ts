import { useEffect } from 'react'

export const useOnStopTyping = (
    search: string,
    callback: (value: string) => Promise<unknown> | unknown,
    ms = 1000
) => {
    useEffect(() => {
        if (!search) {
            return
        }
        const delayDebounceFn = setTimeout(() => {
            callback(search)
        }, ms)

        return () => clearTimeout(delayDebounceFn)
    }, [search, callback, ms])
}
