import Banner from '@/components/pages/animes/banner'
import { Seasons } from '@/components/pages/animes/seasons'
import { getAnimeSearch } from '@/lib/jikan'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
export default async function Animes() {
    const client = createClient()
    const { data } = await client.auth.getUser()
    const ranking = await getAnimeSearch({
        limit: 10,
        order_by: 'favorites',
        type: 'TV',
        sort: 'desc',
    })
    const first = !ranking.hasError ? ranking.data[0] : undefined
    if (!data.user) {
        return redirect('/auth/sign')
    }
    return (
        <section className="w-full flex flex-col">
            {first && (
                <Banner
                    image={
                        first.images.webp.maximum_image_url ||
                        first.images.webp.large_image_url
                    }
                    title={first.titles[1].title}
                    description={first.background || first.synopsis || ''}
                    avaliation={2}
                />
            )}

            <section className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-4 w-full p-6 sm:p-10">
                <Seasons seasons={['fall', 'spring', 'summer', 'winter']} />
            </section>
        </section>
    )
}
