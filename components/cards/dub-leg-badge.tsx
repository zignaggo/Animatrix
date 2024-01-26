import { Badge, BadgeProps } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

type DubLegBadgeProps = {
    type: 'dub' | 'leg'
    children: ReactNode
} & BadgeProps

export function DubLegBadge({ type, children, ...rest }: DubLegBadgeProps) {
    const style =
        type === 'dub'
            ? 'text-lemon-300'
            : 'bg-lemon-500 hover:bg-lemon-500/80 text-purple-500'
    return (
        <Badge size={'default'} variant={'unstyled'} className={cn('px-2 text-sm', style)} {...rest}>
            {children}
        </Badge>
    )
}
