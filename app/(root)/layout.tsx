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
                'grid grid-rows-[auto_1fr_auto] grid-cols-1 md:grid-cols-[auto_1fr] md:grid-rows-1 h-svh bg-background'
            }
        >
            <Sidebar />
            {children}
            <Footer />
        </main>
    )
}
