import { createClient } from '@/supabase/server'
import { redirect } from 'next/navigation'
export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.getUser()
    if (error || !data.user) {
        return redirect('/auth/sign')
    }
    return (
        <main className="flex h-svh bg-background">
            <section className="flex flex-grow flex-col items-center justify-center max-h-screen overflow-y-auto custom-scroll">
                {children}
            </section>
        </main>
    )
}
