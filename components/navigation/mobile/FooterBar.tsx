'use client'
import { SidebarItem } from '../sidebar/SidebarItem'
import { links } from '@/utils/listLinks'
export function FooterBar() {
    return (
        <footer className="px-4 py-3 flex gap-2 w-100 flex-row">
            <nav className="flex flex-1 justify-center gap-3">
                {links.map(({ ActiveIcon, href, Icon, title }, index) => (
                    <SidebarItem
                        key={index}
                        href={href}
                        title={title}
                        variant={'icon'}
                        Icon={() => <Icon width={24} height={24} />}
                        ActiveIcon={
                            ActiveIcon
                                ? () => <ActiveIcon width={24} height={24} />
                                : undefined
                        }
                        tooltipSide={'top'}
                    />
                ))}
            </nav>
        </footer>
    )
}
