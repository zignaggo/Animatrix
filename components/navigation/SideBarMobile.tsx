'use client'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog'
import { SidebarItem } from './SidebarItem'
import Image from 'next/image'
import Link from 'next/link'
import { links } from '@/utils/listLinks'
import { usePathname } from 'next/navigation'
import { useMediaQuery } from '@mantine/hooks'
import { useEffect, useState } from 'react'

export function SideBarMobile({ children }: { children: JSX.Element }) {
    const pathname = usePathname()
    const mobile = useMediaQuery('(max-width: 768px)', false, {
        getInitialValueInEffect: true,
    })
    const [open, setOpen] = useState(mobile)
    useEffect(() => {
        if (!mobile) setOpen(false)
    }, [mobile])
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {mobile ? children : undefined}
            </DialogTrigger>
            <DialogContent
                noClose
                replaceClasses="fixed left-0 h-full top-0 z-50 flex flex-col w-full max-w-60 bg-background shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:slide-out-to-left-1/2  data-[state=open]:slide-in-from-left-1/2 sm:rounded-lg"
            >
                <Link href={'/'} className="p-4 h-min">
                    <Image src="/icon.svg" alt="logo" width={32} height={32} />
                </Link>
                <nav className="w-full h-full flex flex-col p-3 gap-3">
                    {links.map(({ ActiveIcon, href, Icon, title }, index) => (
                        <SidebarItem
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
                        ></SidebarItem>
                    ))}
                </nav>
            </DialogContent>
        </Dialog>
    )
}
