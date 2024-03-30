'use client'
import Image from 'next/image'
import Link from 'next/link'
import { SidebarItem } from '@/components/navigation/sidebar/SidebarItem'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
    LoveLine,
    TvTwoFill,
    TvTwoLine,
    LoveFill,
    CalendarLine,
    CalendarFill,
    TvOneFill,
    TvOneLine,
    PaperLine,
    PaperFill,
} from '@/components/ui/icons'
export function SidebarRoot() {
    const links = [
        {
            href: 'animes',
            Icon: TvTwoLine,
            ActiveIcon: TvTwoFill,
            title: 'Animes',
        },
        {
            href: 'kdrama',
            Icon: LoveLine,
            ActiveIcon: LoveFill,
            title: 'Doramas',
        },
        {
            href: 'calendar',
            Icon: CalendarLine,
            ActiveIcon: CalendarFill,
            title: 'Calendário',
        },
        {
            href: 'movies',
            Icon: TvOneLine,
            ActiveIcon: TvOneFill,
            title: 'Filmes',
        },
        {
            href: 'mangas',
            Icon: PaperLine,
            ActiveIcon: PaperFill,
            title: 'Mangás',
        },
    ]
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
                        variant={'icon'}
                        Icon={() =>  <Icon width={24} height={24} />}
                        ActiveIcon={
                            ActiveIcon ? (
                                () => <ActiveIcon width={24} height={24} />
                            ) : undefined
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
