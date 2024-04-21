import { ErrorSeasonalAnime, ResponseSeasonalAnime } from '@/myanimelist/types'

export async function getSeasonalAnime(
    year: number,
    season: 'winter' | 'spring' | 'summer' | 'fall'
): Promise<ResponseSeasonalAnime | ErrorSeasonalAnime> {
    const response = await fetch(
        `https://api.myanimelist.net/v2/anime/season/${year}/${season}?fields="popularity, num_episodes, status"`,
        {
            headers: {
                'X-MAL-CLIENT-ID': process.env.X_MAL_CLIENT_ID!,
            },
        }
    )
    if (!response.ok) return { error: true, text: response.statusText }
    const data = await response.json()
    return data
}
