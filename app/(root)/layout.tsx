import { SearchInput } from '@/components/inputs/search/input'
import { Footer } from '@/components/navigation/mobile/Footer'
import { Sidebar } from '@/components/navigation/sidebar'
import { getSelectedProfile } from '@/components/navigation/sidebar/profile'
import { UserInfo } from '@/components/navigation/sidebar/User'
import { getProfiles } from '@/components/pages/profiles/mutations/server'
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const profiles = await getProfiles()
    const profile = await getSelectedProfile()
    return (
        <main
            className={
                'grid grid-rows-[auto_1fr_auto] grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-1 h-svh bg-background relative'
            }
        >
            <Sidebar>
                <UserInfo
                    profile={profile}
                    profiles={profiles}
                    className="mr-auto md:mr-0"
                />
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
