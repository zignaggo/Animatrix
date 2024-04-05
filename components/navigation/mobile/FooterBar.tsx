'use client'
import { SidebarItem } from '../sidebar/SidebarItem'
import { links } from '@/utils/listLinks'
export function FooterBar() {
    return (
        <footer className="px-4 py-3 flex gap-2 w-100 flex-row">
            <nav className="flex flex-1 justify-center gap-3">
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
