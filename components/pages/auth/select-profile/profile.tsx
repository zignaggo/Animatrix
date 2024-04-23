'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IconButton } from '@/components/ui/icon-button'
import { getInitials } from '@/utils'
import { Trash2 } from 'lucide-react'
import { MouseEvent, useState } from 'react'

type ProfileProps = {
    name: string
    image?: string
    onClick?: () => unknown
    onDelete?: () => unknown
}
export function Profile({ name, image, onClick, onDelete }: ProfileProps) {
    const initials = getInitials(name)
    const [clickStart, setClickStart] = useState<null | number>(null)
    const [selected, setSelected] = useState(false)

    function handleMouseDown(event: MouseEvent) {
        setClickStart(event.timeStamp)
    }

    function handleMouseUp(event: MouseEvent) {
        if (!clickStart) return
        const clickDuration = event.timeStamp - clickStart
        if (clickDuration > 600) {
            setSelected(!selected)
            setClickStart(null)
        }
    }
    return (
        <div
            className={`relative flex cursor-pointer items-center justify-center flex-col gap-2 group ${
                selected && 'selected'
            }`}
            onClick={onClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
        >
            {selected && (
                <IconButton
                    variant={'danger'}
                    className="absolute -right-[5px] -top-[5px] z-10"
                    onClick={onDelete}
                    size={'sm'}
                >
                    <Trash2 />
                </IconButton>
            )}
            <Avatar className="group-hover:border-[3px] group-hover:border-black-100 h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] group-[.selected]:border-error group-[.selected]:border-[3px] group-[.selected]:scale-[1.05]">
                <AvatarImage src={image} sizes="120" />
                <AvatarFallback className="textsize-h2 sm:textsize-h1 text-purple-100">
                    {initials}
                </AvatarFallback>
            </Avatar>
            <p className="textsize-p1 text-black-400 group-hover:text-black-100 group-[.selected]:text-error">
                {name}
            </p>
        </div>
    )
}
