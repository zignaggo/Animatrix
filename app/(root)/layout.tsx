import { FloatInput } from '@/components/inputs/float'
import { FooterBar } from '@/components/navigation/mobile/FooterBar'
import { Navbar } from '@/components/navigation/mobile/Navbar'
import { Sidebar } from '@/components/navigation/sidebar'
import { cn } from '@/lib/utils'
import { createClient } from '@/supabase/server'
import { headers } from 'next/headers'
import { redirect } from 'next/navigation'
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const isMobile = headers().get('layout') === 'mobile'
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data.user) {
        return redirect('/auth/sign')
    }
    const grid = isMobile ? 'grid-rows-[auto_1fr_auto] grid-cols-1' : ''
    return (
        <main
            className={cn(
                'grid grid-cols-[auto_1fr] grid-rows-1 h-svh bg-background',
                grid
            )}
        >
            {!isMobile && (
                <FloatInput
                    className="absolute top-9 right-[50%] translate-x-[50%] sm:translate-x-0 sm:top-9 sm:right-10 z-50"
                    placeholder="Pesquisar"
                />
            )}
            {!isMobile ? <Sidebar.Root /> : <Navbar />}
            <section className="flex flex-grow flex-col items-start justify-between max-h-screen overflow-y-auto custom-scroll">
                {children}
            </section>
            {isMobile && <FooterBar />}
        </main>
    )
}
