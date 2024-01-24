import { LoveLine, TvTwoFill, TvTwoLine, LoveFill, CalendarLine, CalendarFill, TvOneFill, TvOneLine, PaperLine, PaperFill } from '@/components/ui/icons'
export const links = [
    {
        href: '/animes',
        Icon: TvTwoLine,
        ActiveIcon: TvTwoFill,
        title: 'Animes'
    },
    {
        href: '/kdrama',
        Icon: LoveLine,
        ActiveIcon: LoveFill,
        title: 'Doramas'
    },
    {
        href: '/calendar',
        Icon: CalendarLine,
        ActiveIcon: CalendarFill,
        title: 'Calendário'
    },
    {
        href: '/movies',
        Icon: TvOneLine,
        ActiveIcon: TvOneFill,
        title: 'Filmes'
    },
    {
        href: '/mangas',
        Icon: PaperLine,
        ActiveIcon: PaperFill,
        title: 'Mangás'
    },
]