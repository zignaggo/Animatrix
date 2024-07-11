import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { getInitials } from '@/utils'

type ProfileProps = {
    name: string
    image?: string
    onSubmit?: () => unknown
    onEdit?: () => unknown
    edit?: boolean;
}
export function ProfileAvatar({
    name,
    image,
    onSubmit,
    onEdit,
    edit = false
}: ProfileProps) {
    const initials = getInitials(name)
    return (
        <div
            className={`relative flex items-center justify-center flex-col gap-2 group ${
                edit && 'selected'
            }`}
        >
            <Avatar
                className="group-hover:outline-[3px] group-hover:outline cursor-pointer group-hover:outline-black-100 h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] group-[.selected]:outline-error group-[.selected]:border-[3px] group-[.selected]:scale-[1.05] group-focus-visible:outline-[3px]"
                onClick={edit ? onEdit : onSubmit}
            >
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
