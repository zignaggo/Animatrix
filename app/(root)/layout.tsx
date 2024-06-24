import { SearchInput } from '@/components/inputs/search/input'
import { Footer } from '@/components/navigation/mobile/Footer'
import { Sidebar } from '@/components/navigation/sidebar'
import { UserInfo } from '@/components/navigation/sidebar/User'
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
            <Sidebar>
                <UserInfo className="mr-auto md:mr-0" />
            </Sidebar>
            <SearchInput
                className="hidden md:flex md:absolute top-6 right-6 z-10"
                placeholder="Pesquisar animes"
                reset
            />
            {children}
            <Footer />
        </main>
    )
}
