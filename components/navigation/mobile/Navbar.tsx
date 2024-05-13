import { IconButton } from '@/components/ui/icon-button'
import { Sidebar } from '../sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Icon from '@/components/ui/icons'
import { useProfile } from '@/hooks/profile'
export function Navbar() {
    const profile = useProfile()
    return (
        <header className="px-6 py-3 flex gap-2 w-100 flex-row">
            {profile && (
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>{profile.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
            )}
            <nav className="flex flex-1 justify-end gap-2">
                <Sidebar.Item
                    href="favorite"
                    title="Favoritos"
                    variant="icon"
                    defaultIcon={'HeartLine'}
                    activeIcon={'LoveFill'}
                />
                <IconButton variant={'text'} size={'lg'}>
                    <Icon icon={'NotificationLine'} />
                </IconButton>
            </nav>
        </header>
    )
}
