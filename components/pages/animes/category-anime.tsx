import { AnimeCard } from '@/components/cards/anime'
import { IAnimeResult } from '@consumet/extensions'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

type CategoryAnimeProps = {
    category: string
    animes: IAnimeResult[]
    total?: number
}
export default function CategoryAnime({
    animes,
    category,
    total,
}: CategoryAnimeProps) {
    return (
        <section className="w-full">
            <div className="flex gap-2 items-center">
                <h1 className="textsize-h3 capitalize">{category}</h1>
                {total && (
                    <h1 className="textsize-subtitle2 text-gray-400">{total}</h1>
                )}
            </div>
            <Carousel
                className="w-full"
                opts={{
                    axis: 'x',
                    dragFree: true,
                    startIndex: 0,
                }}
            >
                <CarouselContent className="px-1 py-2">
                    {animes.map((anime) => (
                        <CarouselItem
                            className={'basis-62'}
                            key={anime.id}
                        >
                            <AnimeCard
                                title={anime.title.toString()}
                                subtitle={anime.released}
                                highlight={anime.highlight}
                                image={anime.image}
                                sub={anime.title
                                    .toString()
                                    .toLowerCase()
                                    .includes('sub')}
                                dub={anime.title
                                    .toString()
                                    .toLowerCase()
                                    .includes('dub')}
                                id={anime.id}
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
