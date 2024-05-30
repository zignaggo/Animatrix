export type Days =
    | 'sunday'
    | 'monday'
    | 'tuesday'
    | 'thursday'
    | 'wednesday'
    | 'friday'
    | 'saturday'
export type seasons = 'winter' | 'spring' | 'summer' | 'fall'
export type genders =
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
type picture = {
    medium: string
    large: string
}
type status = 'finished_airing' | 'currently_airing' | 'not_yet_aired'
type Studio = { id: number; name: string }
export type BaseAnime = {
    id: number
    title: string
    main_picture: picture
}
export type Anime = BaseAnime & {
    popularity: number
    num_episodes: number
    synopsis: string
    alternative_titles: {
        synonyms: string[]
        en: string
        ja: string
    }
    start_season: {
        year: number
        season: seasons
    }
    start_date: string
    end_date: string
    genres: { id: number; name: genders }[]
    status: status // Finalizado, Ocorrendo, Vai lançar
    pictures: picture[]
    mean: number // avaliação 7.87
    broadcast: { day_of_the_week: Days; start_time: string } // Dia e hora do lançamento do anime no japão
    recommendations: { node: BaseAnime; num_recommendations: number }
    studios: Studio[]
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
export type ResponseAnimeList = {
    data: { node: Anime }[]
    error: false
}
