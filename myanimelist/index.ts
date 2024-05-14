import { ResponseSeasonalAnime } from '@/myanimelist/types'
import { envServerSchema } from '@/types/serverEnvSchema'
const api = 'https://api.myanimelist.net/v2'
export async function getSeasonalAnime(
    year: number,
    season: 'winter' | 'spring' | 'summer' | 'fall'
): Promise<ResponseSeasonalAnime> {
    const response = await fetch(
        `${api}/anime/season/${year}/${season}?fields="popularity, num_episodes, status"`,
        {
            headers: {
                'X-MAL-CLIENT-ID': envServerSchema.X_MAL_CLIENT_ID,
            },
        }
    )
    const data = await response.json()
    return data
}
