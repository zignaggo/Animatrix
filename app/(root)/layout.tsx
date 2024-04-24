import { FloatInput } from '@/components/inputs/float'
import { FooterBar } from '@/components/navigation/mobile/FooterBar'
import { Navbar } from '@/components/navigation/mobile/Navbar'
import { Sidebar } from '@/components/navigation/sidebar'
import Profiles from '@/components/pages/auth/profile'
import { headers } from 'next/headers'
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const mobile = headers().get('viewport')
    return (
        <main
            className={
                'grid grid-rows-[auto_1fr_auto] grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-1 h-svh bg-background'
            }
        >
            {mobile !== 'mobile' && (
                <FloatInput
                    className="absolute top-9 right-[50%] translate-x-[50%] sm:translate-x-0 sm:top-9 sm:right-10 z-50"
                    placeholder="Pesquisar"
                />
            )}
            {mobile !== 'mobile' ? <Sidebar.Root /> : <Navbar />}
            <section className="flex flex-grow flex-col items-start justify-between max-h-screen overflow-y-auto custom-scroll">
                <Profiles>{children}</Profiles>
            </section>
            {mobile === 'mobile' && <FooterBar />}
        </main>
    )
}
