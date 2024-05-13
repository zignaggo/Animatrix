'use client'
import * as React from 'react'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

export interface NotificationProps
    extends React.HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof notificationVariants> {
    text: string
    hide?: boolean
}
const notificationVariants = cva(
    'absolute inline-flex items-center justify-center textsize-p6',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white rounded-full',
                unstyle: '',
            },
            size: {
                default: 'w-5 h-5',
            },
            position: {
                right: '-top-2 -right-2',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
            position: 'right',
        },
    }
)

const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
    (
        { className, children, text, variant, size, hide = true, ...props },
        ref
    ) => (
        <div className="relative">
            {!hide && (
                <div
                    ref={ref}
                    className={cn(
                        notificationVariants({ variant, size, className })
                    )}
                    {...props}
                >
                    {text}
                </div>
            )}
            {children}
        </div>
    )
)
Notification.displayName = 'Notification'

export { Notification }
