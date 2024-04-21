import { getSeasonalAnime } from '@/myanimelist'
import { ListAnime } from './list-anime'
import { getI18n } from '@/locales/server'
import { seasons } from '@/myanimelist/types'
type SeasonAnimeProps = { seasons: seasons[] }

export async function Seasons({ seasons }: SeasonAnimeProps) {
    const response = Array.from(new Set(seasons)).map(async (season) => ({
        season,
        animes: await getSeasonalAnime(2024, season),
    }))
    const t = await getI18n()
    const allSeasons = await Promise.all(response)
    return allSeasons.map(({ season, animes }) => {
        return (
            <ListAnime
                key={season}
                animes={animes.data.map((anime) => ({
                    id: String(anime.node.id),
                    title: anime.node.title,
                    image: anime.node.main_picture.large,
                    highlight:
                        anime.node.num_episodes > 0
                            ? `${anime.node.num_episodes} Episódios`
                            : undefined,
                    subtitle: t(anime.node.status),
                }))}
                category={`Temporada de ${t(season.toLowerCase() as seasons)}`}
            />
        )
    })
}
