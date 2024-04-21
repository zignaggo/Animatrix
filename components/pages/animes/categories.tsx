import CategoryAnime from './category-anime'
export type genders = (
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
    | 'winter'
)[]
type CategoryAnimeProps = { categories: genders }

export default async function Categories({ categories }: CategoryAnimeProps) {
    const response = Array.from(new Set(categories)).map(async (category) => ({
        category,
        animes: [],
    }))
    const allCategories = await Promise.all([])
    return allCategories.map(({ category, animes }) => {
        return (
            <CategoryAnime
                key={category}
                animes={[]}
                category={category}
            />
        )
    })
}
