import { NextRequest, NextResponse } from 'next/server'

export function getInitials(name: string) {
    const nameSplited = name.split(' ')
    const first = nameSplited[0][0]
    const second =
        nameSplited.length > 1 ? nameSplited[1][0] : nameSplited[0][1]
    return `${first}${second}`
}

export const publicRoutes = ['/auth/sign', '/auth/register']
export const redirectTo = (request: NextRequest, to: string) =>
    NextResponse.redirect(new URL(to, request.nextUrl))

export const translations = {
    seasons: {
        season: 'Temporada',
        fall: 'Temporada de Outono',
        winter: 'Temporada de Inverno',
        spring: 'Temporada de Primavera',
        summer: 'Temporada de Verão',
    },
    anime: {
        status: {
            finished_airing: 'Finalizado',
            currently_airing: 'Lançando',
            not_yet_aired: 'Em breve',
        },
    },
}
