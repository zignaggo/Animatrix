'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { IconButton } from '@/components/ui/icon-button'
import Icon from '@/components/ui/icons'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'
import { useKeyboard } from '@/hooks/useKeyboard'
import { createQueryString } from '@/utils'
export interface FloatInput
    extends React.InputHTMLAttributes<HTMLInputElement> {
    onSearchClick?: (...rest: any) => unknown
}

const SearchInput = React.forwardRef<HTMLInputElement, FloatInput>(
    ({ onSearchClick, className, type, value, ...props }, ref) => {
        const [search, setSearch] = React.useState('')
        const router = useRouter()
        const searchParams = useSearchParams()
        const to = '/search?' + createQueryString('query', search, searchParams)
        useKeyboard('Enter', 'keydown', () => {
            if (!search.length) return;
            onSearchClick && onSearchClick()
            router.push(to)
        }, false)
        return (
            <div
                className={cn(
                    'group flex items-center w-fit rounded-xl pr-3 pl-4 h-14 bg-black-800 text-md  ring-offset-background focus-within:bg-purple-600  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-md shadow-black-950/50',
                    className
                )}
            >
                <input
                    className="h-full w-full bg-transparent caret-shape-block focus:bg-transparent focus-visible:outline-none group-focus-within:placeholder:text-white/50 animate-caret-blink mr-2"
                    type={type}
                    ref={ref}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    {...props}
                />
                <div className="textsize-p1 text-black-500 group-focus-within:text-purple-300 mr-1">
                    ⌘K
                </div>
                <IconButton
                    variant={'text'}
                    onClick={onSearchClick}
                    className="min-w-10"
                >
                    <Icon
                        width={'20px'}
                        icon={'SearchThreeLine'}
                        onClick={() => {
                            router.push(to)
                            onSearchClick && onSearchClick();
                        }}
                    />
                </IconButton>
            </div>
        )
    }
)
SearchInput.displayName = 'SearchInput'

export { SearchInput }
