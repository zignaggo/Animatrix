import { useEffect } from 'react'

export function useKeyboard<T>(
    key: {
        code?: string,
        key?: string,
    },
    event: keyof GlobalEventHandlersEventMap,
    callback: () => T,
    pressControl = true
) {
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (pressControl) {
                if (e.key === key.key && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    callback()
                }
                return
            }
            if (e.key === key.key || e.code === key.code) {
                callback()
            }
        }
        document.addEventListener(event, down as any)
        return () => document.removeEventListener('keydown', down)
    }, [callback, event, key, pressControl])
}
