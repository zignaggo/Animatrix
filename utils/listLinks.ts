import { IconType } from "@/components/ui/icons"

export const links: {
    href: string
    defaultIcon: IconType
    activeIcon: IconType
    title: string
}[] = [
    {
        href: 'animes',
        defaultIcon: 'TvTwoLine',
        activeIcon: 'TvTwoFill',
        title: 'Animes',
    },
    {
        href: 'kdrama',
        defaultIcon: 'LoveLine',
        activeIcon: 'LoveFill',
        title: 'Doramas',
    },
    {
        href: 'calendar',
        defaultIcon: 'CalendarLine',
        activeIcon: 'CalendarFill',
        title: 'Calendário',
    },
    {
        href: 'movies',
        defaultIcon: 'TvOneLine',
        activeIcon: 'TvOneFill',
        title: 'Filmes',
    },
    {
        href: 'mangas',
        defaultIcon: 'PaperLine',
        activeIcon: 'PaperFill',
        title: 'Mangás',
    },
]