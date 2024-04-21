import { genders } from '@/myanimelist/types'
import { ListAnime } from './list-anime'

type CategoryAnimeProps = { categories: genders[] }

export default async function Categories({ categories }: CategoryAnimeProps) {
    const response = Array.from(new Set(categories)).map(async (category) => ({
        category,
        animes: [],
    }))
    const allCategories = await Promise.all([])
    return allCategories.map(({ category, animes }) => {
        return <ListAnime key={category} animes={[]} category={category} />
    })
}
