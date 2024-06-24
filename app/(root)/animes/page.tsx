import Banner from '@/components/pages/animes/banner'
import { Seasons } from '@/components/pages/animes/seasons'
import { getAnimeRanking } from '@/lib/myanimelist'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
export default async function Animes() {
    const client = createClient()
    const { data } = await client.auth.getUser()
    const ranking = await getAnimeRanking('airing')
    const first = ranking.data[0].node
    console.log(first);
    if (!data.user) {
        return redirect('/auth/sign')
    }
    return (
        <section className="w-full flex flex-col">
            <Banner
                image={first.main_picture.large}
                title={first.title}
                description={first.synopsis}
                avaliation={2}
            />
            <section className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-4 w-full p-6 sm:p-10">
                <Seasons seasons={['fall', 'spring', 'summer', 'winter']} />
            </section>
        </section>
    )
}
