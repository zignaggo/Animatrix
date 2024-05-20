export type Anime = {
    id: number
    title: string
    main_picture: {
        medium: string
        large: string
    }
    popularity: number
    num_episodes: number
    status: 'finished_airing' | 'currently_airing' | 'not_yet_aired' // Finalizado, Ocorrendo, Vai lançar
}
export type ResponseSeasonalAnime = {
    data: { node: Anime }[]
    error: false
    paging: string
}
export type ErrorSeasonalAnime = { error: true; text: string }
