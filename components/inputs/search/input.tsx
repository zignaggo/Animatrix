'use client'
import { cn } from '@/lib/utils'
import { IconButton } from '@/components/ui/icon-button'
import Icon from '@/components/ui/icons'
import { usePathname, useSearchParams } from 'next/navigation'
import { useRouter } from 'next-nprogress-bar'
import { useKeyboard } from '@/hooks/useKeyboard'
import { createQueryString } from '@/utils'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
export interface FloatInput extends InputHTMLAttributes<HTMLInputElement> {
    onSearchClick?: (...rest: any) => unknown
    reset?: boolean
    always?: boolean
    redirect?: boolean
    value?: string;
}

const SearchInput = forwardRef<HTMLInputElement, FloatInput>(
    (
        {
            onSearchClick,
            className,
            type,
            value,
            onChange,
            redirect = true,
            always = false,
            reset = false,
            ...props
        },
        ref
    ) => {
        const [search, setSearch] = useState('')
        const router = useRouter()
        const pathname = usePathname()
        const searchParams = useSearchParams()
        const redirectToSearch = (to: string) => {
            if (pathname === '/search') {
                router.replace(to)
                return
            }
            router.push(to)
        }
        const handleSubmit = () => {
            if (!search.length) return
            onSearchClick && onSearchClick()
            redirect && redirectToSearch(to)
            reset && setSearch('')
        }
        const to = '/search?' + createQueryString('query', search, searchParams)
        useKeyboard('Enter', 'keydown', handleSubmit, false)
        return (
            <div
                className={cn(
                    'group flex items-center w-fit rounded-xl pr-3 pl-4 h-14 bg-black-800 text-md  ring-offset-background focus-within:bg-purple-600  focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 shadow-md shadow-black-950/50',
                    className,
                    always && 'always [&.always]:bg-purple-600'
                )}
            >
                <input
                    className="h-full w-full bg-transparent caret-shape-block focus:bg-transparent focus-visible:outline-none group-focus-within:placeholder:text-white/50 animate-caret-blink mr-2 group-[.always]:placeholder:text-white/50"
                    ref={ref}
                    type={type}
                    value={!value ? search : value}
                    onChange={
                        !onChange ? (e) => setSearch(e.target.value) : onChange
                    }
                    {...props}
                />
                <div className="textsize-p1 text-black-500 group-focus-within:text-purple-300 group-[.always]:text-purple-300 mr-1">
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
                        onClick={handleSubmit}
                    />
                </IconButton>
            </div>
        )
    }
)
SearchInput.displayName = 'SearchInput'

export { SearchInput }
