import { AnimeCard } from '@/components/cards/anime'
import { Anime } from '@/lib/myanimelist/types'

export function ListAnimes({ animes }: { animes: Anime[] }) {
    return (
        <div className="flex flex-wrap justify-center gap-6 mt-6">
            {animes.map((anime) => (
                <AnimeCard
                    key={anime.id}
                    id={String(anime.id)}
                    title={anime.title}
                    image={anime.main_picture?.large}
                />
            ))}
        </div>
    )
}
