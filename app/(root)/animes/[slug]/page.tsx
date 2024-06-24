import Details from '@/components/pages/animes/details'
import Breadcrumbs from '@/components/pages/animes/details/breadcrumbs'
import Episodes from '@/components/pages/animes/details/episodes'
import { SFW } from '@/components/pages/sfw'
import { getAnimeDetails } from '@/lib/myanimelist'
import { notFound } from 'next/navigation'

type AnimeDetailsType = { params: { slug: number } }
export default async function AnimeDetails({ params }: AnimeDetailsType) {
    const response = await getAnimeDetails(params.slug)
    if (response.error) {
        return notFound()
    }
    const anime = response.data
    return (
        <section className="p-6 sm:p-10 flex flex-grow w-full flex-col gap-4">
            <SFW isSafe={anime.nsfw === 'white'}>
                <Breadcrumbs slug={anime.title} />
                <Details
                    image={anime.main_picture.large}
                    genders={anime.genres.map((genre) => genre.name)}
                    title={anime.title}
                    description={anime.synopsis}
                    releaseDate={anime.start_season.year.toString()}
                />
                <Episodes />
            </SFW>
        </section>
    )
}
