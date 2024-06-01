import Image from 'next/image'
import Link from 'next/link'
import { SidebarItem } from '@/components/navigation/sidebar/Item'
import { links } from '@/utils/listLinks'
import { UserInfo } from './User'
import { Notification } from '@/components/ui/notification'
import { IconButton } from '@/components/ui/icon-button'
import Icon from '@/components/ui/icons'
export function Sidebar() {
    return (
        <header className="flex flex-row-reverse md:flex-col p-3 gap-2 items-center">
            <Link href={'/animes'} className="hidden md:flex mb-2">
                <Image
                    src="/icon.svg"
                    priority
                    alt="logo"
                    width={32}
                    height={32}
                />
            </Link>
            <nav className="hidden md:flex md:flex-col h-full p-3 md:p-0 gap-3">
                {links.map(
                    ({ activeIcon, href, defaultIcon, title }, index) => (
                        <SidebarItem
                            key={index}
                            className={''}
                            href={href}
                            title={title}
                            variant="icon"
                            defaultIcon={defaultIcon}
                            activeIcon={activeIcon}
                        />
                    )
                )}
            </nav>
            <Notification text={'1'}>
                <IconButton variant={'text'} size={'lg'}>
                    <Icon icon="NotificationLine" />
                </IconButton>
            </Notification>
            {/* <SidebarItem
                href={'/favorite'}
                title={'Favoritos'}
                variant="icon"
                defaultIcon={'HeartLine'}
                activeIcon={'HeartFill'}
            /> */}
            <UserInfo className="mr-auto md:mr-0" />
        </header>
    )
}
