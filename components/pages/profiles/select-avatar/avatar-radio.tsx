import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { cn } from '@/lib/utils'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
const RadioAvatarItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
        src: string
    }
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn('aspect-square h-16 w-16 rounded-full data-[state=checked]:outline outline-purple-100 outline-3', className)}
            {...props}
        >
            <Avatar className="h-full w-full">
                <AvatarImage src={props.src} />
            </Avatar>
        </RadioGroupPrimitive.Item>
    )
})
RadioAvatarItem.displayName = RadioGroupPrimitive.Item.displayName

export { RadioAvatarItem }
