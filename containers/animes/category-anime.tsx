import { AnimeCard } from '@/components/cards/anime'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'
import { ANIME } from '@consumet/extensions'

async function getAnimes(category: string) {
    const searchEngine = new ANIME.Gogoanime()
    const response = await searchEngine.fetchGenreInfo(category)
    return response
}

type CategoryAnimeProps = { category: string; title?: string }

export default async function CategoryAnime({
    category,
    title,
}: CategoryAnimeProps) {
    const response = await getAnimes(category)
    return (
        <section className="w-full">
            <h1 className="text-h3 capitalize">{title || category}</h1>
            <Carousel
                className="w-full"
                opts={{
                    axis: 'x',
                    breakpoints: { '767px': { containScroll: 'trimSnaps' } },
                    dragFree: true,
                    startIndex: 0,
                }}
            >
                <CarouselContent>
                    {response.results.map((anime, i) => (
                        <CarouselItem
                            className="basis-62 py-2"
                            key={anime.id}
                        >
                            <AnimeCard
                                title={anime.title.toString()}
                                subtitle={
                                    anime.releaseDate?.split(':')[1] || ''
                                }
                                highlight={anime.subOrDub}
                                image={anime.image || ''}
                                sub={anime.subOrDub === 'sub'}
                                dub={anime.subOrDub === 'dub'}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    )
}
