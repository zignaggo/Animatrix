import { SearchCommand } from '@/components/inputs/search'
import { SearchInput } from '@/components/inputs/search/input'
import { Footer } from '@/components/navigation/mobile/Footer'
import { Sidebar } from '@/components/navigation/sidebar'
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main
            className={
                'grid grid-rows-[auto_1fr_auto] grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-1 h-svh bg-background relative'
            }
        >
            <Sidebar />
            <SearchCommand />
            <SearchInput
                className="hidden md:flex md:absolute top-6 right-6 z-10"
                placeholder="Pesquisar animes"
            />
            {children}
            <Footer />
        </main>
    )
}
