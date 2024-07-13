'use client'
import { ReactNode, useState } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuProfileItem,
    DropdownMenuRadioGroup,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { LogOut, User } from 'lucide-react'
import { TProfile } from '@/lib/supabase/types'
import { getInitials } from '@/utils'
import { ConfirmExit } from './dialogs/confirm-exit'

export function Menu({
    children,
    currentProfileID,
    profiles,
}: {
    children: ReactNode
    currentProfileID: number
    profiles: TProfile[]
}) {
    const [profile, setProfile] = useState(String(currentProfileID))
    const [confirmOpen, setConfirmOpen] = useState(false)
    const handleExit = async () => {
        setConfirmOpen(true);
    }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" side="top" sideOffset={8}>
                <DropdownMenuLabel className="flex gap-2 items-center">
                    <User /> Minha conta
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuRadioGroup
                        value={profile}
                        onValueChange={setProfile}
                    >
                        {profiles.map((profile) => (
                            <DropdownMenuProfileItem
                                value={String(profile.id)}
                                key={profile.id}
                                src={profile.avatar?.url}
                                initials={getInitials(profile.name)}
                                className='mt-1'
                            >
                                {profile.name}
                            </DropdownMenuProfileItem>
                        ))}
                    </DropdownMenuRadioGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-error" onClick={handleExit}>
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Sair</span>
                        <DropdownMenuShortcut>⌘W</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
            <ConfirmExit open={confirmOpen} onOpenChange={setConfirmOpen}/>
        </DropdownMenu>
    )
}
