'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useEffect } from 'react'
import { IconButton } from '../ui/icon-button'
import Icon from '../ui/icons'
export interface FloatInput
    extends React.InputHTMLAttributes<HTMLInputElement> {
    onSearchClick?: (...rest: any) => unknown
    onCleanClick?: (...rest: any) => unknown
}

const FloatInput = React.forwardRef<HTMLInputElement, FloatInput>(
    ({ onCleanClick, onSearchClick, className, type, ...props }, ref) => {
        const [open, setOpen] = React.useState(false)

        useEffect(() => {
            const down = (e: KeyboardEvent) => {
                if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                    e.preventDefault()
                    setOpen((open) => !open)
                }
            }
            document.addEventListener('keydown', down)
            return () => document.removeEventListener('keydown', down)
        }, [])
        return (
            <div
                className={cn(
                    'group flex items-center w-fit rounded-xl pr-3 pl-4 h-14 bg-black-800 text-md font-bold ring-offset-background focus-within:bg-purple-600  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-md shadow-black-950/50',
                    className
                )}
            >
                <input
                    className="h-full w-fit bg-transparent caret-shape-block focus:bg-transparent focus-visible:outline-none placeholder:text-muted-foreground focus:placeholder:text-white/80"
                    type={type}
                    ref={ref}
                    {...props}
                />
                <IconButton
                    className="invisible group-focus-within:visible"
                    variant={'text'}
                    onClick={onCleanClick}
                >
                    <Icon width={'20px'} icon={'CloseLine'} />
                </IconButton>
                <IconButton variant={'text'} onClick={onSearchClick}>
                    <Icon width={'20px'} icon={'SearchThreeLine'} />
                </IconButton>
            </div>
        )
    }
)
FloatInput.displayName = 'FloatInput'

export { FloatInput }
