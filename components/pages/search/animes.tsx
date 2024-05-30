import { getAnimeByName } from '@/lib/myanimelist'
import { SearchEmpty } from './empty'
import { ListAnimes } from './list-animes'
import { TextSearch } from 'lucide-react'

export async function SearchAnimes({ query }: { query: string }) {
    const response = await getAnimeByName(query)
    if (response.error) {
        return <div>Error</div>
    }
    const animes = response.data.map((anime) => anime.node)
    return (
        <div className="w-full h-full">
            <div className=' flex gap-2 textsize-h5 text-black-500'>
                <TextSearch />
                <p>
                    {animes.length} Resultados Encontrados
                </p>
            </div>
            <div className="flex flex-wrap gap-2 h-full">
                {!animes.length ? (
                    <SearchEmpty />
                ) : (
                    <ListAnimes animes={animes} />
                )}
            </div>
        </div>
    )
}
