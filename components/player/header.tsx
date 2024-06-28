import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { IconButton } from '../ui/icon-button'
import { LucideFullscreen, Settings, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type HeaderProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    title?: string
    subtitle?: string
    noSettings?: boolean
    noFullscreen?: boolean
    noClose?: boolean
    fullscreen?: boolean
}
export function Header({
    title,
    subtitle,
    noSettings = false,
    noClose = false,
    noFullscreen = false,
    fullscreen = false,
    className,
    ...props
}: HeaderProps) {
    return (
        <div className={cn('flex', className)} {...props}>
            <div>
                <h2>{title}</h2>
                <p className="textsize-subtitle-1 text-lemon-500">{subtitle}</p>
            </div>
            <div className="ml-auto flex gap-2">
                {!noSettings && (
                    <IconButton variant="text">
                        <Settings />
                    </IconButton>
                )}
                {!noFullscreen && (
                    <IconButton variant="text">
                        {!fullscreen ? <LucideFullscreen /> : <></>}
                    </IconButton>
                )}
                {!noClose && (
                    <IconButton variant="text">
                        <X />
                    </IconButton>
                )}
            </div>
        </div>
    )
}
