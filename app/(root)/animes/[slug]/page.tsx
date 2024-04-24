import Details from '@/components/pages/animes/details'
import Breadcrumbs from '@/components/pages/animes/details/breadcrumbs'
import Episodes from '@/components/pages/animes/details/episodes'
import { notFound } from 'next/navigation'

type AnimeDetailsType = { params: { slug: string } }
export default async function AnimeDetails({ params }: AnimeDetailsType) {
    const response = null;
    if (!response) {
        notFound()
    }
    // const anime = response.results[0]
    return (
        <section className="p-10 flex w-full flex-col gap-4">
            {/* <Breadcrumbs slug={params.slug} />
            <Details
                image={anime.image!}
                genders={anime.genres}
                title={anime.title.toString()}
                description={anime.description}
                releaseDate={anime.releaseDate!}
            /> */}
            <Episodes />
        </section>
    )
}
