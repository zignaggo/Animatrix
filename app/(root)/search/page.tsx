import { SearchAnimes } from '@/components/pages/search/animes'
import SearchBar from '@/components/pages/search/header'
export default async function Search({
    searchParams,
}: {
    searchParams: { query: string }
}) {
    console.log(searchParams)
    return (
        <section className="h-full flex flex-col justify-center sm:justify-start gap-6 sm:gap-4 w-full p-6 sm:p-10">
            <SearchBar />
            <SearchAnimes anime={searchParams.query}/>
        </section>
    )
}
