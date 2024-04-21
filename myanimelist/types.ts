export type genders = (
    | 'romance'
    | 'action'
    | 'adventure'
    | 'comedy'
    | 'drama'
    | 'fantasy'
    | 'horror'
    | 'magic'
    | 'mystery'
    | 'psychological'
    | 'sci-fi'
    | 'slice of life'
    | 'sports'
    | 'supernatural'
    | 'thriller'
    | 'yaoi'
    | 'yuri'
    | 'winter'
)
export type Anime = {
    id: number
    title: string
    main_picture: {
        medium: string
        large: string
    }
    popularity: number
    num_episodes: number
    synopsis: string
    alternative_titles: {
        synonyms: string[]
        en: string
        ja: string
    }
    genres: { id: number; name: genders }[]
    status: 'finished_airing' | 'currently_airing' | 'not_yet_aired' // Finalizado, Ocorrendo, Vai lançar
}
export type ResponseSeasonalAnime = {
    data: { node: Anime }[]
    error: false
    paging: string
}
export type ErrorSeasonalAnime = { error: true; text: string }

export type ResponseAnimeDetails = {
    data: Anime
    error: false
}