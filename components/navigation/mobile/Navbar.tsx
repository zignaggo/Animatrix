'use client'
import { Sidebar } from '../sidebar'
import { HeartLine, LoveFill } from '@/components/ui/icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export function Navbar() {
    return (
        <header className="px-6 py-3 flex gap-2 w-100 flex-row">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <nav className="flex flex-1 justify-end">
                <Sidebar.Item
                    href="favorite"
                    title="Favoritos"
                    variant="icon"
                    Icon={() => <HeartLine />}
                    ActiveIcon={() => <LoveFill/>}
                />
                <Sidebar.Item
                    href="notification"
                    title="Notificações"
                    variant="icon"
                    Icon={() => <HeartLine />}
                    ActiveIcon={() => <LoveFill/>}
                />
            </nav>
        </header>
    )
}
