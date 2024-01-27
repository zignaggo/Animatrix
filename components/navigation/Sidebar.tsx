'use client'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarItem } from '@/components/navigation/SidebarItem'
import { usePathname } from 'next/navigation'
import { links } from '@/utils/listLinks'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
export function Sidebar() {
    const pathname = usePathname()
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
                {links.map(({ ActiveIcon, href, Icon, title }, index) => (
                    <SidebarItem
                        key={index}
                        href={href}
                        title={title}
                        currentPage={pathname}
                        variant={'icon'}
                        Icon={() => <Icon width={24} height={24} />}
                        ActiveIcon={
                            ActiveIcon
                                ? () => <ActiveIcon width={24} height={24} />
                                : undefined
                        }
                    ></SidebarItem>
                ))}
            </nav>
            <div className="p-4">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </header>
    )
}
