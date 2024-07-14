import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IconButton } from '@/components/ui/icon-button'
import { cn } from '@/lib/utils'
import { getInitials } from '@/utils'
import { Edit2, Trash2 } from 'lucide-react'

type ProfileProps = {
    name?: string
    image?: string
    edit?: boolean
    noHover?: boolean
    className?: string
    noDelete?: boolean
    onSubmit?: () => unknown
    onEdit?: () => unknown
    onDelete?: () => unknown
}
export function ProfileAvatar({
    name,
    image,
    onSubmit,
    onEdit,
    edit = false,
    noHover = false,
    noDelete = false,
    onDelete,
    className,
}: ProfileProps) {
    const initials = name ? getInitials(name) : undefined
    return (
        <div
            className={cn(
                `relative flex items-center justify-center flex-col gap-2 ${
                    !noHover && !edit && 'group'
                } ${edit && 'selected'}`,
                className
            )}
        >
            {edit && (
                <>
                    <IconButton
                        className="absolute -top-1 -right-1 z-10"
                        variant="secondary"
                        size="sm"
                        type="button"
                        onClick={onEdit}
                    >
                        <Edit2 size={16} />
                    </IconButton>
                    {!noDelete && (
                        <IconButton
                            className="absolute -bottom-1 -left-1 z-10"
                            variant="danger"
                            size="sm"
                            type="button"
                            onClick={onDelete}
                        >
                            <Trash2 size={16} />
                        </IconButton>
                    )}
                </>
            )}

            <Avatar
                className="group-hover:outline-[3px] group-hover:outline cursor-pointer group-hover:outline-black-100 h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] group-[.selected]:outline-[3px] group-[.selected]:outline-black-700 group-focus-visible:outline-[3px]"
                onClick={onSubmit}
            >
                <AvatarImage src={image} sizes="120" />
                <AvatarFallback className="textsize-h2 sm:textsize-h1 text-purple-100">
                    {initials}
                </AvatarFallback>
            </Avatar>
            {name && (
                <p className="textsize-p1 text-black-400 group-hover:text-black-100">
                    {name}
                </p>
            )}
        </div>
    )
}
