import { SearchInput } from '@/components/inputs/search/input'
import { SearchAnimes } from '@/components/pages/search/animes'
import { SearchEmpty } from '@/components/pages/search/empty'
import { SearchHeader } from '@/components/pages/search/header'
export default function Search({
    searchParams,
}: {
    searchParams: { query: string }
}) {
    return (
        <section className="flex-grow flex flex-col md:justify-center gap-3 w-full p-6 sm:p-10">
            <SearchHeader />
            <SearchInput
                placeholder="Pesquise por algo"
                className="md:hidden w-full min-h-14"
                reset
            />
            {searchParams.query && <SearchAnimes query={searchParams.query} />}
            {!searchParams.query && <SearchEmpty />}
        </section>
    )
}
