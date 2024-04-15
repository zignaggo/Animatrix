'use client'
import { type VariantProps } from 'class-variance-authority'
import { IconButton, buttonVariants } from './icon-button'
import { Tooltip, TooltipTrigger, TooltipContent } from './tooltip'
import { ComponentPropsWithoutRef, ElementRef, forwardRef, useState } from 'react'
const Toggle = forwardRef<
    ElementRef<typeof IconButton>,
    ComponentPropsWithoutRef<typeof IconButton> &
        VariantProps<typeof buttonVariants> & {
            activeIcon: JSX.Element
            tooltip?: string
            activeTooltip?: string
        }
>(
    (
        { className, children, activeIcon, tooltip, activeTooltip, ...props },
        ref
    ) => {
        const [active, setActive] = useState(false)
        return (
            <Tooltip>
                <TooltipTrigger asChild>
                    <IconButton
                        ref={ref}
                        {...props}
                        onClick={() => setActive(!active)}
                    >
                        {active ? activeIcon : children}
                    </IconButton>
                </TooltipTrigger>
                <TooltipContent>
                    {!active ? tooltip : activeTooltip}
                </TooltipContent>
            </Tooltip>
        )
    }
)

Toggle.displayName = 'Toggle'

export { Toggle, buttonVariants }
