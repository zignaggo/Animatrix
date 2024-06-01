import { IconType } from "@/components/ui/icons"
export const links: {
    href: string
    defaultIcon: IconType
    activeIcon: IconType
    title: string
}[] = [
    {
        href: '/animes',
        defaultIcon: 'TvTwoLine',
        activeIcon: 'TvTwoFill',
        title: 'Animes',
    },
    {
        href: '/search',
        defaultIcon: 'SearchThreeLine',
        activeIcon: 'SearchThreeFill',
        title: 'Pesquisar',
    },
    // {
    //     href: '/calendar',
    //     defaultIcon: 'CalendarLine',
    //     activeIcon: 'CalendarFill',
    //     title: 'Calendário',
    // },
    // {
    //     href: '/kdrama',
    //     defaultIcon: 'LoveLine',
    //     activeIcon: 'LoveFill',
    //     title: 'Doramas',
    // },
    // {
    //     href: '/movies',
    //     defaultIcon: 'TvOneLine',
    //     activeIcon: 'TvOneFill',
    //     title: 'Filmes',
    // },
]