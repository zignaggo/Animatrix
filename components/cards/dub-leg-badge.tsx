import { Badge, BadgeProps } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type DubLegBadgeProps = {
    type: 'dub' | 'leg'
    children: ReactNode
} & BadgeProps

export function DubLegBadge({ type, children, ...props }: DubLegBadgeProps) {
    const style =
        type === 'dub'
            ? 'bg-primary text-lemon-300 hover:text-lemon-300'
            : 'bg-lemon-500 hover:bg-lemon-500 text-purple-500'
    return (
        <Badge size={'default'} variant={'unstyled'} className={cn('px-2 textsize-p4 py-0', style)} {...props}>
            {children}
        </Badge>
    )
}
