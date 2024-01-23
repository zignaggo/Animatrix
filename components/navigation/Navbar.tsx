'use client'
import { NavbarItem } from '@/components/navigation/NavbarItem'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { LoveLine, TvTwoFill, TvTwoLine, LoveFill, CalendarLine, CalendarFill, TvOneFill, TvOneLine, PaperLine, PaperFill } from '@/components/ui/icons'
export function Navbar() {
    const pathname = usePathname()
    const links = [
        {
            to: '/animes',
            Icon: TvTwoLine,
            ActiveIcon: TvTwoFill,
        },
        {
            to: '/kdrama',
            Icon: LoveLine,
            ActiveIcon: LoveFill,
        },
        {
            to: '/calendar',
            Icon: CalendarLine,
            ActiveIcon: CalendarFill,
        },
        {
            to: '/movies',
            Icon: TvOneLine,
            ActiveIcon: TvOneFill,
        },
        {
            to: '/mangas',
            Icon: PaperLine,
            ActiveIcon: PaperFill,
        },
    ]
    return (
        <header className="flex flex-col items-center">
            <Link href={'/'} className="p-4">
                <Image src="/icon.svg" alt="logo" width={32} height={32} />
            </Link>
            <div className="flex flex-col p-3 gap-3">
                {links.map(({ ActiveIcon, to, Icon}, index) => (
                    <NavbarItem
                        key={index}
                        href={to}
                        currentPage={pathname}
                        variant={"icon"}
                        Icon={() => <Icon width={24} height={24}/>}
                        ActiveIcon={
                            ActiveIcon
                                ? () => <ActiveIcon width={24} height={24}/>
                                : undefined
                        }
                    ></NavbarItem>
                ))}
            </div>
        </header>
    )
}
