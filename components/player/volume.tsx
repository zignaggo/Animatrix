import { Volume2 } from 'lucide-react'
import { IconButton, IconButtonProps } from '../ui/icon-button'
import { Slider } from '../ui/slider'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'
import { useState } from 'react'

type VolumeProps = Omit<IconButtonProps, 'defaultValue'> & {
    defaultValue?: number[]
    max?: number
    step?: number
    onValueChange?: (e: number) => void
    onValueCommit?: (e: number) => void
}
export function Volume({
    onClick,
    step = 1,
    max = 100,
    defaultValue = [0],
    onValueChange,
    onValueCommit,
    ...props
}: VolumeProps) {
    const [open, setOpen] = useState(false)
    return (
        <HoverCard open={open} onOpenChange={(value) => setOpen(value)} openDelay={100}>
            <HoverCardTrigger>
                <IconButton
                    onClick={() => setOpen((state) => !state)}
                    {...props}
                >
                    <Volume2 size="20px" />
                </IconButton>
            </HoverCardTrigger>
            <HoverCardContent className="w-auto p-2 border-none" side="top">
                <Slider
                    defaultValue={defaultValue}
                    max={max}
                    step={step}
                    className="w-3 h-[96px] cursor-pointer"
                    orientation="vertical"
                    onValueChange={(e) => onValueChange && onValueChange(e[0])}
                    onValueCommit={(e) => onValueCommit && onValueCommit(e[0])}
                />
            </HoverCardContent>
        </HoverCard>
    )
}
