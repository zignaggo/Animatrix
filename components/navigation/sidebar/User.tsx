import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { getInitials } from '@/utils'
import { getSelectedProfile } from './profile'
import { cn } from '@/lib/utils'
import { getProfiles } from '@/components/pages/profiles/mutations'
import { Menu } from '@/components/menu'

type UserInfoProps = { className?: string }
export async function UserInfo({ className }: UserInfoProps) {
    const profile = await getSelectedProfile()
    const profiles = await getProfiles()
    const initials = getInitials(profile.name)
    return (
        <Menu profiles={profiles} currentProfileID={profile.id}>
            <Avatar className={cn('cursor-pointer', className)}>
                <AvatarImage />
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
        </Menu>
    )
}
