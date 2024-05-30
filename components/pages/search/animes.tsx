import { SearchEmpty } from './empty'

export async function SearchAnimes({ anime }: { anime: string }) {
    const length = 0
    return (
        <div className="w-full h-full">
            <p>{length} Resultados Encontrados</p>
            <div className="flex h-full">
                {!anime ? <SearchEmpty /> : anime}
            </div>
        </div>
    )
}
