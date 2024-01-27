'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CloseLine, SearchThreeLine } from '@/components/ui/icons'
import { useKeyDown } from '@/utils/useKeyListener'

export interface FloatInput
    extends React.InputHTMLAttributes<HTMLInputElement> {
    onSearchClick?: (...rest: any) => unknown
    onCleanClick?: (...rest: any) => unknown
}

const FloatInput = React.forwardRef<HTMLInputElement, FloatInput>(
    ({ onCleanClick, onSearchClick, className, type, ...props }, ref) => {
        useKeyDown('ControlLeft', () => console.log('ControlLeft'))
        useKeyDown('ControlRight', () => console.log('ControlRight'))
        useKeyDown('KeyK', () => console.log('KeyK'))
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
                <Button className='invisible group-focus-within:visible' variant={'text'} size={'icon'} onClick={onCleanClick}>
                    <CloseLine width={'20px'} />
                </Button>
                <Button variant={'text'} size={'icon'} onClick={onSearchClick}>
                    <SearchThreeLine width={'20px'} />
                </Button>
            </div>
        )
    }
)
FloatInput.displayName = 'FloatInput'

export { FloatInput }
