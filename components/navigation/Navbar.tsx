'use client'
import { NavbarItem } from '@/components/navigation/NavbarItem'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'
export function Navbar() {
    const pathname = usePathname()
    const links = [
        {
            href: '/animes',
            icon: 'mingcute:tv-2-line',
        },
        {
            href: '/kdrama',
            icon: 'mingcute:love-line',
        },
        {
            href: '/calendar',
            icon: 'mingcute:calendar-line',
        },
        {
            href: '/movies',
            icon: 'mingcute:tv-1-line',
        },
        {
            href: '/mangas',
            icon: 'mingcute:paper-line',
        },
    ]
    return (
        <header className="flex flex-col align-center">
            <div className="flex flex-col p-3 gap-3">
                {links.map((link, index) => (
                    <NavbarItem
                        key={index}
                        href={link.href}
                        currentPage={pathname}
                    >
                        <Icon icon={link.icon} fontSize="20px" />
                    </NavbarItem>
                ))}
            </div>
        </header>
    )
}
