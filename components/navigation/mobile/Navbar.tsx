import { IconButton } from '@/components/ui/icon-button'
import Icon from '@/components/ui/icons'
import { SidebarItem } from '../sidebar/Item'
import { UserInfo } from '../sidebar/User'
export function Navbar() {
    return (
        <header className="px-6 py-3 flex gap-2 w-100 flex-row">
            <UserInfo />
            <nav className="flex flex-1 justify-end gap-2">
                <SidebarItem
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
