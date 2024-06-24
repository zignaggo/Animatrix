'use server'
import {
    ErrorAnime,
    RankingType,
    ResponseAnimeDetails,
    ResponseAnimeList,
    ResponseAnime,
    seasons,
    RankAnime,
} from '@/lib/myanimelist/types'
import { envServerSchema } from '@/types/serverEnvSchema'
const api = 'https://api.myanimelist.net/v2'
const headers = {
    'X-MAL-CLIENT-ID': envServerSchema.X_MAL_CLIENT_ID,
}
export async function getSeasonalAnime(
    year: number,
    season: seasons
): Promise<ResponseAnime> {
    const response = await fetch(
        `${api}/anime/season/${year}/${season}?fields="popularity, num_episodes, status"`,
        {
            headers,
        }
    )
    const data = await response.json()
    return data
}
export async function getAnimeDetails(
    id: number
): Promise<ResponseAnimeDetails | ErrorAnime> {
    try {
        const response = await fetch(
            `${api}/anime/${id}?fields=id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,nsfw,created_at,updated_at,media_type,status,genres,my_list_status,num_episodes,start_season,broadcast,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
            {
                headers,
            }
        )
        const data = await response.json()
        if (data.error) {
            return { error: true, text: 'Erro ao encontrar o anime' }
        }
        return { data, error: false }
    } catch (error) {
        return { error: true, text: 'Erro ao encontrar o anime' }
    }
}

export async function getAnimeByName(
    query: string,
    limit = 48
): Promise<ResponseAnimeList | ErrorAnime> {
    try {
        const response = await fetch(
            `${api}/anime?q=${query}&limit=${limit}&fields=id,title,main_picture`,
            {
                headers,
            }
        )
        const data = await response.json()
        if (data.error) {
            return { error: true, text: 'Erro ao encontrar o anime' }
        }
        return { data: data.data, error: false }
    } catch (error) {
        return { error: true, text: 'Erro ao encontrar o anime' }
    }
}

/**
 * Returns a ordered anime ranking array.
 * 
 * @param RankingType rankingType
 * -
 * - all          - Top Anime Series
 * - airing	      - Top Airing Anime
 * - upcoming	  - Top Upcoming Anime
 * - tv	          - Top Anime TV Series 
 * - ova	      - Top Anime OVA Series
 * - movie	      - Top Anime Movies
 * - special	  - Top Anime Specials
 * - bypopularity - Top Anime by Popularity
 * - favorite	  - Top Favorited Anime
 * @param number limit - The limit of results.
 * @returns Promise<ResponseAnime<RankAnime>>
 */
export async function getAnimeRanking(
    rankingType: RankingType = 'all',
    limit = 48
): Promise<ResponseAnime<RankAnime>> {
    const response = await fetch(
        `${api}/anime/ranking?ranking_type=${rankingType}&limit=${limit}&fields=id,title,main_picture,synopsis,genres,source,average_episode_duration,rating,pictures,background,related_anime,related_manga,recommendations,studios,statistics`,
        {
            headers,
        }
    )
    const data = await response.json()
    return data
}
