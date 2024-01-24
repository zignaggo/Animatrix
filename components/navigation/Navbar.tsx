'use client'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarItem } from '@/components/navigation/NavbarItem'
import { usePathname } from 'next/navigation'
import { links } from '@/utils/listLinks'

export function Navbar() {
    const pathname = usePathname()
    return (
        <header className="hidden md:flex flex-col items-center">
            <Link href={'/'} className="p-4">
                <Image src="/icon.svg" alt="logo" width={32} height={32} />
            </Link>
            <nav className="flex flex-col p-3 gap-3">
                {links.map(({ ActiveIcon, href, Icon, title}, index) => (
                    <NavbarItem
                        key={index}
                        href={href}
                        title={title}
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
            </nav>
        </header>
    )
}
