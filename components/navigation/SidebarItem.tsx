import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from '@/components/ui/tooltip'
const sidebarItemVariants = cva(
    'inline-flex items-center gap-2 w-12 h-12 rounded-md px-3 py-3 w-fit text-md font-semibold transition-colors',
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
    currentPage?: string
    Icon: () => React.ReactNode
    ActiveIcon?: () => React.ReactNode
    title?: string
}

function SidebarItem({
    className,
    href,
    currentPage,
    ActiveIcon,
    Icon,
    title,
    variant,
    ...props
}: SidebarItemProps) {
    const selectedVariant = currentPage?.includes(href.toString())
        ? 'select'
        : variant
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
                    {selectedVariant === 'select' && ActiveIcon ? (
                        <ActiveIcon />
                    ) : (
                        <Icon />
                    )}

                    {title && variant !== 'icon' ? <p>{title}</p> : null}
                </Link>
            </TooltipTrigger>
            <TooltipContent side='right'>
                <p>{title}</p>
            </TooltipContent>
        </Tooltip>
    )
}

export { SidebarItem, sidebarItemVariants }
