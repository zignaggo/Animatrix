import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { getInitials } from '@/utils'
import { getProfile } from './profile'

type UserInfoProps = { className?: string }
export async function UserInfo({ className }: UserInfoProps) {
    const profile = await getProfile()
    const initials = getInitials(profile.name)
    return (
        <Avatar className={className}>
            <AvatarImage />
            <AvatarFallback>{initials}</AvatarFallback>
        </Avatar>
    )
}
