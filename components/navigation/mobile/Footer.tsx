'use client'
import { SidebarItem } from '../sidebar/Item'
import { links } from '@/utils/listLinks'
export function Footer() {
    return (
        <footer className="flex px-4 py-3 md:hidden gap-2 w-100 flex-row">
            <nav className="flex flex-1 justify-center gap-4">
                {links.map(({ activeIcon, href, defaultIcon, title }, index) => (
                    <SidebarItem
                        key={index}
                        href={href}
                        title={title}
                        variant={'icon'}
                        defaultIcon={defaultIcon}
                        activeIcon={activeIcon}
                        tooltipSide={'top'}
                    />
                ))}
            </nav>
        </footer>
    )
}
