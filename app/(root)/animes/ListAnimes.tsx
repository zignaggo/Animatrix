import { AnimeCard } from '@/components/cards/anime'

async function getAnimes(anime: string) {
    const response = await fetch(anime)
    return response.json() as Promise<PaginationResponse>
}
type Result = {
    id: string
    title: string
    image: string
    subOrDub: 'sub' | 'dub'
    releaseDate: string
}

type PaginationResponse = {
    currentPage: number
    hasNextPage: boolean
    results: Result[]
}
export default async function ListAnimes({
    anime,
    page,
}: {
    anime: string
    page: number
}) {
    const url = `http://0.0.0.0:3000/anime/gogoanime/${anime}?page=${page}`
    const response = await getAnimes(url)
    return response.results.map((anime) => (
        <AnimeCard
            key={anime.id}
            title={anime.title}
            subtitle={anime.releaseDate.split(':')[1]}
            highlight={anime.subOrDub}
            url={anime.image}
            sub={anime.subOrDub === 'sub'}
            dub={anime.subOrDub === 'dub'}
        />
    ))
}
