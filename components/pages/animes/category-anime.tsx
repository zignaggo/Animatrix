import { AnimeCard } from '@/components/cards/anime'
import { IAnimeResult } from '@consumet/extensions';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

type CategoryAnimeProps = {
    category: string;
    animes: IAnimeResult[]
}
export default function CategoryAnime({ animes, category }: CategoryAnimeProps) {
    return (
        <section className="w-full">
            <h1 className="text-h3 capitalize">{category}</h1>
            <Carousel
                className="w-full"
                opts={{
                    axis: 'x',
                    dragFree: true,
                    startIndex: 0,
                }}
            >
                <CarouselContent className="pl-1">
                    {animes.map((anime) => (
                        <CarouselItem className="basis-62 py-2" key={anime.id}>
                            <AnimeCard
                                title={anime.title.toString()}
                                subtitle={
                                    anime.subtitle
                                }
                                highlight={anime.highlight}
                                image={anime.image}
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
