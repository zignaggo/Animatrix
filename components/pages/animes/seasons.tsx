import { getSeasonalAnime } from '@/myanimelist'
import CategoryAnime from './category-anime'
export type seasons = (
    | 'winter'
    | 'spring'
    | 'summer'
    | 'fall'
)[]
type SeasonAnimeProps = { seasons: seasons }

export async function Seasons({ seasons }: SeasonAnimeProps) {
    const response = Array.from(new Set(seasons)).map(async (season) => ({
        season,
        animes: await getSeasonalAnime(2024, season),
    }))
    const allCategories = await Promise.all(response)
    return allCategories.map(({ season, animes }) => {
        return (
            <CategoryAnime
                key={season}
                animes={animes.data.map((anime) => ({
                    id: String(anime.node.id),
                    title: anime.node.title,
                    image: anime.node.main_picture.large,
                    highlight: anime.node.num_episodes > 0 ? `${anime.node.num_episodes} Episódios` : undefined,
                    subtitle: anime.node.status,
                }))}
                category={`Temporada de ${season}`}
            />
        )
    })
}