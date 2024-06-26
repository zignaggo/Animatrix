'use client'
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { useSelectedLayoutSegment } from 'next/navigation'
import Icon, { IconType } from '@/components/ui/icons'
const sidebarItemVariants = cva(
    'inline-flex items-center gap-2 w-12 h-12 rounded-md px-3 py-3 w-fit text-base/6 font-semibold transition-colors',
    {
        variants: {
            variant: {
                default:
                    'w-full text-primary-foreground hover:bg-black-800 active:bg-black-700',
                select: 'w-full bg-black-800 active:bg-black-700 text-purple-500',
                icon: 'text-primary-foreground hover:bg-black-800 active:bg-black-700 max-w-12 max-h-12',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface SidebarItemProps
    extends React.HTMLAttributes<HTMLAnchorElement>,
        LinkProps,
        VariantProps<typeof sidebarItemVariants> {
    defaultIcon: IconType
    activeIcon?: IconType
    title?: string
    mobile?: boolean
    tooltipSide?: 'right' | 'top' | 'bottom' | 'left'
}

function SidebarItem({
    className,
    href,
    activeIcon,
    defaultIcon,
    title,
    variant,
    tooltipSide = 'right',
    ...props
}: SidebarItemProps) {
    const segment = useSelectedLayoutSegment()
    const isActive = href.toString().includes(segment || '')
    const selectedVariant = isActive ? 'select' : variant
    return (
        <Tooltip>
            <TooltipTrigger>
                <Link
                    href={href}
                    className={cn(
                        sidebarItemVariants({ variant: selectedVariant }),
                        className
                    )}
                    {...props}
                >
                    <Icon
                        icon={
                            selectedVariant === 'select' && activeIcon
                                ? activeIcon
                                : defaultIcon
                        }
                    />
                    {title && variant !== 'icon' ? <p>{title}</p> : null}
                </Link>
            </TooltipTrigger>
            <TooltipContent side={tooltipSide}>
                <p>{title}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export { SidebarItem, sidebarItemVariants }
