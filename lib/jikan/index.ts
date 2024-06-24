import {
    JikanAnimeImage,
    JikanAnimeType,
    JikanEpisode,
    JikanParamAnimeStatus,
    JikanParamOrderBy,
    JikanResponseError,
    JikanResponseSuccess,
} from './types'

// import { envServerSchema } from '@/types/serverEnvSchema'
const api = 'https://api.jikan.moe/v4'
const headers = {
    // 'X-MAL-CLIENT-ID': envServerSchema.X_MAL_CLIENT_ID,
}

type GetAnimeSearchParams = {
    query?: string
    sfw?: boolean
    page?: number
    status?: JikanParamAnimeStatus
    limit?: number
    genres?: string // like genre1, genre2
    genres_exclude?: string // like genre1, genre2
    sort?: 'desc' | 'asc'
    type?: JikanAnimeType
    order_by?: JikanParamOrderBy
    [key: string]:
        | string
        | boolean
        | JikanParamOrderBy
        | 'desc'
        | 'asc'
        | undefined
        | number
}
export async function getAnimeSearch(
    params: GetAnimeSearchParams
): Promise<JikanResponseSuccess | JikanResponseError> {
    try {
        let baseUrl = `${api}/anime?`
        for (const key in params) {
            const value = params[key]
            if (value !== undefined && value !== '') {
                baseUrl += `${key}=${value}&`
            }
        }
        const response = await fetch(baseUrl.slice(0, -1), {
            headers,
        })
        const data: JikanResponseSuccess | JikanResponseError =
            await response.json()
        if (data.hasError) {
            return { ...data, message: 'Erro ao encontrar o anime' }
        }
        return { hasError: false, data: data.data, pagination: data.pagination }
    } catch (error) {
        return { message: 'Erro ao encontrar o anime', hasError: true }
    }
}
export async function getAnimePictures(
    id: number
): Promise<
    JikanResponseSuccess<JikanAnimeImage[]> | JikanResponseError
> {
    try {
        const response = await fetch(`${api}/anime/${id}/pictures`, {
            headers,
        })
        const data: JikanResponseSuccess<JikanAnimeImage[]> | JikanResponseError =
            await response.json()
        if (data.hasError) {
            return { ...data, message: 'Erro ao encontrar as imagens do anime' }
        }
        return { hasError: false, data: data.data, pagination: data.pagination }
    } catch (error) {
        return {
            message: 'Erro ao encontrar as imagens do anime',
            hasError: true,
        }
    }
}
export async function getAnimeVideosEpisodes(
    id: number
): Promise<
    JikanResponseSuccess<JikanEpisode[]> | JikanResponseError
> {
    try {
        const response = await fetch(`${api}/anime/${id}/videos/episodes`, {
            headers,
        })
        const data: JikanResponseSuccess<JikanEpisode[]> | JikanResponseError =
            await response.json()
        if (data.hasError) {
            return { ...data, message: 'Erro ao encontrar as imagens do anime' }
        }
        return { hasError: false, data: data.data, pagination: data.pagination }
    } catch (error) {
        return {
            message: 'Erro ao encontrar as imagens do anime',
            hasError: true,
        }
    }
}
