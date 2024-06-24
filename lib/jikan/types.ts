export type JikanSeasons = 'winter' | 'spring' | 'summer' | 'fall'
// Responses
export type JikanPagination = {
    last_visible_page: number
    has_next_page: boolean
    items: {
        count: number
        total: number
        per_page: number
    }
}
export type JikanResponseSuccess<T = JikanAnime[]> = {
    data: T
    pagination: JikanPagination
    hasError: false
}
export type JikanResponseError = {
    status?: number
    type?: string
    message: string
    hasError: true
    error?: string
    report_url?: string
}

// Params
export type JikanParamAnimeStatus = 'airing' | 'complete' | 'upcoming'
/**
 *
 * Available Anime audience ratings
 * - G - All Ages
 * - PG - Children
 * - PG-13 - Teens 13 or older
 * - R - 17+ (violence & profanity)
 * - R+ - Mild Nudity
 * - Rx - Hentai
 *
 */
export type JikanParamAnimeRating = 'g' | 'pg' | 'pg13' | 'r17' | 'r' | 'rx'
export type JikanParamOrderBy =
    | 'mal_id'
    | 'title'
    | 'start_date'
    | 'end_date'
    | 'episodes'
    | 'score'
    | 'scored_by'
    | 'rank'
    | 'popularity'
    | 'members'
    | 'favorites'
export type JikanAnimeRating =
    | 'G - All Ages'
    | 'PG - Children'
    | 'PG-13 - Teens 13 or older'
    | 'R - 17+ (violence & profanity)'
    | 'R+ - Mild Nudity'
    | 'Rx - Hentai'

// Images
export type JikanImageFormat = {
    image_url: string
    small_image_url: string
    medium_image_url: string
    large_image_url: string
    maximum_image_url: string
}
export type JikanAnimeImage = {
    jpg: JikanImageFormat
    webp: JikanImageFormat
}

// Anime
export type JikanAnimeType =
    | 'TV'
    | 'OVA'
    | 'Movie'
    | 'Special'
    | 'ONA'
    | 'Music'
export type JikanAnimeStatus =
    | 'Finished Airing'
    | 'Currently Airing'
    | 'Not yet aired'

export type JikanAnimeGenre = {
    mal_id: number
    type: string
    name: string
    url: string
}

export type JikanAnime = {
    mal_id: number
    url: string
    images: JikanAnimeImage
    trailer: {
        youtube_id: string | null
        url: string | null
        embed_url: string | null
    }
    approved: boolean
    titles: { type: string; title: string }[]
    type: JikanAnimeType
    source: string | null
    episodes: number
    status: JikanAnimeStatus
    airing: boolean
    aired: {
        from: string | null // Date ISO8601
        to: string | null // Date ISO8601
    }
    duration: string | null
    rating: JikanAnimeRating
    score: number
    scored_by: number
    rank: number
    popularity: number
    members: number
    favorites: number
    synopsis: string | null
    background: string | null
    season: JikanSeasons
    year: number
    genres: JikanAnimeGenre[]
}

export type JikanEpisode = {
    mal_id: number
    title: string
    episode: string // subtitle
    url: string
    images: {
        jpg: {
            image_url: string
        }
    }
}
