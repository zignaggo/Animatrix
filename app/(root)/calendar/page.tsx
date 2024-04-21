import CategoryAnime from '@/components/pages/animes/category-anime'
import { getSeasonalAnime } from '@/myanimelist'

export default async function Calendar() {
    const response = await getSeasonalAnime(2024, 'winter')
    if (response.error) {
        return <div>Error ao buscar os animes</div>
    }
    console.log(response.data)
    return (
        <section className='w-full p-10'>
            <CategoryAnime
                category="Winter"
                animes={response.data.map((anime) => ({
                    id: String(anime.node.id),
                    title: anime.node.title,
                    image: anime.node.main_picture.large,
                    highlight: `${anime.node.num_episodes} Episódios`,
                    subtitle: anime.node.status,
                }))}
            />
        </section>
    )
}
