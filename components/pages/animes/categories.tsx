import { getAnimesByCategory } from '@/search'
import { genders } from '@/search/translations'
import CategoryAnime from './category-anime'
type categories = (
    | 'romance'
    | 'action'
    | 'adventure'
    | 'comedy'
    | 'drama'
    | 'fantasy'
    | 'horror'
    | 'magic'
    | 'mystery'
    | 'psychological'
    | 'sci-fi'
    | 'slice of life'
    | 'sports'
    | 'supernatural'
    | 'thriller'
    | 'yaoi'
    | 'yuri'
)[]
type CategoryAnimeProps = { categories: categories }

export default async function Categories({ categories }: CategoryAnimeProps) {
    const response = Array.from(new Set(categories)).map(async (category) => ({
        category,
        animes: await getAnimesByCategory(category),
    }))
    const allCategories = await Promise.all(response)
    return allCategories.map(({ category, animes }) => {
        return (
            <CategoryAnime
                key={category}
                total={animes.totalResults}
                animes={animes.results}
                category={genders[category]}
            />
        )
    })
}
