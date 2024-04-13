'use client'
import * as React from 'react'
import { type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { IconButton, buttonVariants } from './icon-button'
const Toggle = React.forwardRef<
    React.ElementRef<typeof IconButton>,
    React.ComponentPropsWithoutRef<typeof IconButton> &
        VariantProps<typeof buttonVariants> & { activeIcon: JSX.Element }
>(({ className, variant, size, children, activeIcon, ...props }, ref) => {
    const [active, setActive] = React.useState(false)
    return (
        <IconButton
            ref={ref}
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
            onClick={() => setActive(!active)}
        >
            {active ? activeIcon : children}
        </IconButton>
    )
})

Toggle.displayName = "Toggle"

export { Toggle, buttonVariants }
