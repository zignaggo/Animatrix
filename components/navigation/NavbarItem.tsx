import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Link, { LinkProps } from 'next/link'
const navbarItemVariants = cva(
    'inline-flex items-center gap-2 w-12 h-12 rounded-md px-3 py-3 w-fit text-md font-semibold transition-colors',
    {
        variants: {
            variant: {
                default:
                    'text-primary-foreground hover:bg-black-800 px-4 active:bg-black-700',
                select: 'bg-black-800 active:bg-black-700 text-purple-500',
                icon: 'text-primary-foreground hover:bg-black-800 active:bg-black-700 max-w-12 max-h-12',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface navbarItemProps
    extends React.HTMLAttributes<HTMLAnchorElement>,
        LinkProps,
        VariantProps<typeof navbarItemVariants> {
    currentPage?: string
    Icon: () => React.ReactNode
    ActiveIcon?: () => React.ReactNode
}

function NavbarItem({
    className,
    href,
    currentPage,
    ActiveIcon,
    Icon,
    variant,
    ...props
}: navbarItemProps) {
    const selectedVariant = currentPage === href.toString() ? 'select' : variant
    return (
        <Link
            href={href}
            className={cn(
                navbarItemVariants({ variant: selectedVariant }),
                className
            )}
            {...props}
        >
            {selectedVariant === 'select' && ActiveIcon ? (
                <ActiveIcon />
            ) : (
                <Icon />
            )}
        </Link>
    )
}

export { NavbarItem, navbarItemVariants }
