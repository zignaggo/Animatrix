import { Pause, Play, SkipBack, SkipForward } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconButton } from '../ui/icon-button'
import { useEffect } from 'react'
import { useKeyboard } from '@/hooks/useKeyboard'

type InnerControlsProps = {
    playing?: boolean
    className?: string
    onPlay?: (value: boolean) => void
    onSkip?: () => void
    onPrev?: () => void
}
export function InnerControls({
    className,
    playing,
    onPlay,
    onPrev,
    onSkip,
}: InnerControlsProps) {
    useKeyboard({ code: 'Space' }, 'keydown', () => {
        onPlay && onPlay(!playing)
    }, false)
    return (
        <div
            className={cn(className, 'flex items-center justify-center gap-2')}
            onClick={() => onPlay && onPlay(!playing)}
        >
            <IconButton
                variant="text"
                size="lg"
                onClick={(e) => {
                    e.stopPropagation()
                    onPrev && onPrev()
                }}
            >
                <SkipBack />
            </IconButton>
            <IconButton
                variant="text"
                size="lg"
                onClick={(e) => {
                    e.stopPropagation()
                    onPlay && onPlay(!playing)
                }}
            >
                {!playing ? <Play /> : <Pause></Pause>}
            </IconButton>
            <IconButton
                variant="text"
                size="lg"
                onClick={(e) => {
                    e.stopPropagation()
                    onSkip && onSkip()
                }}
            >
                <SkipForward />
            </IconButton>
        </div>
    )
}
