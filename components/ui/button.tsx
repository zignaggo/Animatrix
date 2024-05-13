import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-purple-800 active:bg-purple-999',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70',
                outline:
                    'border-2 border-purple-500 bg-background hover:bg-purple-600 active:bg-purple-999 hover:text-accent-foreground',
                danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/80 active:bg-destructive/70',
                text: 'hover:bg-black-800/40 active:bg-black-800/50',
                success: 'bg-lemon-700 hover:bg-lemon-800 active:bg-lemon-900',
            },
            size: {
                sm: 'h-7 rounded-md text-xs px-4',
                default: 'h-10 px-4 py-2',
                lg: 'h-12 rounded-md px-6 text-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean
    loading?: boolean
    loadingText?: string
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant,
            size,
            children,
            loadingText,
            loading = false,
            asChild = false,
            disabled,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                disabled={disabled || loading}
                {...props}
            >
                {!loading ? (
                    children
                ) : (
                    <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        {loadingText}
                    </>
                )}
            </Comp>
        )
    }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
