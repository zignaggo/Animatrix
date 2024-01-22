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
            href: '/',
            icon: TvTwoLine,
            activeIcon: TvTwoFill,
        },
        {
            href: '/kdrama',
            icon: LoveLine,
            activeIcon: LoveFill,
        },
        {
            href: '/calendar',
            icon: CalendarLine,
            activeIcon: CalendarFill,
        },
        {
            href: '/movies',
            icon: TvOneLine,
            activeIcon: TvOneFill,
        },
        {
            href: '/mangas',
            icon: PaperLine,
            activeIcon: PaperFill,
        },
    ]
    return (
        <header className="flex flex-col items-center">
            <Link href={'/'} className="p-4">
                <Image src="/icon.svg" alt="logo" width={32} height={32} />
            </Link>
            <div className="flex flex-col p-3 gap-3">
                {links.map((link, index) => (
                    <NavbarItem
                        key={index}
                        href={link.href}
                        currentPage={pathname}
                        variant={"icon"}
                        Icon={() => <link.icon width={24} height={24}/>}
                        ActiveIcon={
                            link.activeIcon
                                ? () => <link.activeIcon width={24} height={24}/>
                                : undefined
                        }
                    ></NavbarItem>
                ))}
            </div>
        </header>
    )
}
