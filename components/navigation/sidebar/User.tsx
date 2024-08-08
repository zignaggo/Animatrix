'use client'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { getInitials } from '@/utils'
import { cn } from '@/lib/utils'
import { Menu } from '@/components/menu'
import { TProfile } from '@/lib/supabase/types'
import { profileAtom } from '@/store/user'
import { useAtomValue } from 'jotai'
import { useHydrateAtoms } from 'jotai/utils'
type UserInfoProps = {
    className?: string
    profile?: TProfile | null
    profiles: TProfile[]
}
export function UserInfo({ className, profile, profiles }: UserInfoProps) {
    useHydrateAtoms([
        [profileAtom, { currentProfile: profile || null, profiles }],
    ])
    const profileValue = useAtomValue(profileAtom)
    const initials = getInitials(profileValue.currentProfile?.name || '..')
    return (
        <Menu profiles={profiles} currentProfile={profile || null}>
            <Avatar className={cn('cursor-pointer', className)}>
                <AvatarImage src={profileValue.currentProfile?.avatar?.url} />
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
        </Menu>
    )
}
