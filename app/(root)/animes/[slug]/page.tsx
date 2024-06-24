import Details from '@/components/pages/animes/details'
import Breadcrumbs from '@/components/pages/animes/details/breadcrumbs'
import Episodes from '@/components/pages/animes/details/episodes'
import { SFW } from '@/components/pages/sfw'
import { getAnimeFullById } from '@/lib/jikan'
import { genders } from '@/lib/myanimelist/types'
import { notFound } from 'next/navigation'

type AnimeDetailsType = { params: { slug: number } }
export default async function AnimeDetails({ params }: AnimeDetailsType) {
    const response = await getAnimeFullById(params.slug)
    if (response.hasError) {
        return notFound()
    }
    const anime = response.data
    return (
        <section className="p-6 sm:p-10 flex flex-grow w-full flex-col gap-4">
            <SFW isSafe={true}>
                <Breadcrumbs slug={anime.titles[0].title} />
                <Details
                    image={
                        anime.images.webp.maximum_image_url ||
                        anime.images.webp.large_image_url
                    }
                    genders={anime.genres.map((genre) => genre.name) as genders[]}
                    titles={anime.titles}
                    description={anime.synopsis || ''}
                    releaseDate={anime.year.toString()}
                />
                <Episodes />
            </SFW>
        </section>
    )
}
