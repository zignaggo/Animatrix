import Details from '@/components/pages/animes/details'
import Breadcrumbs from '@/components/pages/animes/details/breadcrumbs'
import Episodes from '@/components/pages/animes/details/episodes'
import { getAnimeDetails } from '@/myanimelist'
import { notFound } from 'next/navigation'

type AnimeDetailsType = { params: { slug: number } }
export default async function AnimeDetails({ params }: AnimeDetailsType) {
    const response = await getAnimeDetails(params.slug);
    if (response.error) {
        console.log('error')
        return notFound()
    }
    return (
        <section className="p-10 flex w-full flex-col gap-4">
            <Breadcrumbs slug={response.data.title} />
            <Details
                image={response.data.main_picture.large}
                genders={response.data.genres.map((genre) => genre.name)}
                title={response.data.title}
                description={response.data.synopsis}
                releaseDate={response.data.title}
            />
            <Episodes />
        </section>
    )
}
