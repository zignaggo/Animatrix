'use client'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarItem } from '@/components/navigation/sidebar/SidebarItem'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { links } from '@/utils/listLinks'
import { Toggle } from '@/components/ui/toggle'
import Icon from '@/components/ui/icons'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/icon-button'
export function SidebarRoot() {
    return (
        <header className="flex flex-col items-center">
            <Link href={'/animes'} className="p-4">
                <Image
                    src="/icon.svg"
                    priority
                    alt="logo"
                    width={32}
                    height={32}
                />
            </Link>
            <nav className="flex flex-col h-full p-3 gap-3">
                {links.map(
                    ({ activeIcon, href, defaultIcon, title }, index) => (
                        <SidebarItem
                            key={index}
                            href={href}
                            title={title}
                            variant="icon"
                            defaultIcon={defaultIcon}
                            activeIcon={activeIcon}
                        />
                    )
                )}
            </nav>
            <div className="flex flex-col gap-4 py-4 items-center">
                <IconButton variant={'text'} size={'lg'}>
                    <Icon icon="NotificationLine" />
                </IconButton>
                <SidebarItem
                    href={'/favorite'}
                    title={'Favoritos'}
                    variant="icon"
                    defaultIcon={'HeartLine'}
                    activeIcon={'HeartLine'}
                />
                <Avatar>
                    <AvatarImage />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}
