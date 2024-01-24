'use client'
import Image from 'next/image'
import Link from 'next/link'
import { NavbarItem } from '@/components/navigation/NavbarItem'
import { usePathname } from 'next/navigation'
import { links } from '@/utils/listLinks'
import { useState } from 'react'
import { cn } from '@/lib/utils'

export function SideBarMobile({ children }: { children: JSX.Element }) {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)
    const openClasses = open ? `left-auto ease-out` : undefined
    children.props.onClick = () => setOpen((value) => !value)
    return (
        <>
            <header
                className={cn(
                    'flex w-60 absolute h-[calc(100svh-40px)]  flex-col items-center left-[-240px] bg-black-950',
                    openClasses
                )}
            >
                <Link href={'/'} className="p-4">
                    <Image src="/icon.svg" alt="logo" width={32} height={32} />
                </Link>
                <nav className="w-full flex flex-col p-3 gap-3">
                    {links.map(({ ActiveIcon, href, Icon, title }, index) => (
                        <NavbarItem
                            key={index}
                            href={href}
                            currentPage={pathname}
                            title={title}
                            variant={'default'}
                            Icon={() => <Icon width={24} height={24} />}
                            ActiveIcon={
                                ActiveIcon
                                    ? () => (
                                          <ActiveIcon width={24} height={24} />
                                      )
                                    : undefined
                            }
                        ></NavbarItem>
                    ))}
                </nav>
            </header>
            {children}
        </>
    )
}
