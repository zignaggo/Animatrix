import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2',
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground hover:bg-purple-800 active:bg-purple-999',
                secondary:
                    'bg-secondary text-secondary-foreground hover:bg-black-700 active:bg-black-600',
                outline:
                    'border-2 border-purple-500 bg-background hover:bg-purple-600 active:bg-purple-999 hover:text-accent-foreground',
                danger: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80',
                text: 'hover:bg-black-800/60 active:bg-black-700/60',
                success: 'bg-lemon-700 hover:bg-lemon-800 active:bg-lemon-900',
                unstyle: 'bg-transparent',
            },
            size: {
                sm: 'w-8 h-8 rounded-md text-xs',
                default: 'w-10 h-10 rounded-md',
                lg: 'w-12 h-12 rounded-md text-md',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

export interface IconButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean,
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
)
IconButton.displayName = 'IconButton'

export { IconButton, buttonVariants }
