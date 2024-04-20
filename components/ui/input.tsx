'use client'
import { cn } from '@/lib/utils'
import { ReactNode, forwardRef } from 'react'

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    leftIcon?: ReactNode
    rightIcon?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, leftIcon, rightIcon, ...props }, ref) => {
        return (
            <div
                className={cn(
                    'flex h-12 w-full items-center gap-2 rounded-md bg-black-800 px-4 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground hover:bg-black-700 focus-visible:outline-none  focus-within:bg-black-700 focus-within:ring-2 focus-within:ring-purple-100 disabled:cursor-not-allowed disabled:opacity-50 autofill:bg-black-700 group-autofill:bg-black-700',
                    className
                )}
            >
                {leftIcon}
                <input
                    className="w-full h-full bg-transparent focus:outline-none autofill:bg-black-700"
                    ref={ref}
                    {...props}
                />
                {rightIcon}
            </div>
        )
    }
)
Input.displayName = 'Input'

export { Input }
