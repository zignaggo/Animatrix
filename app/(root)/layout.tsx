import { FloatInput } from '@/components/inputs/float'
import { Sidebar } from '@/components/navigation/Sidebar'
import { cookies, headers } from 'next/headers'
export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const mobile = headers().get('viewport')
    return (
        <main
            className={
                'grid grid-cols-1 md:grid-cols-[auto_1fr] h-svh bg-background overflow-y-scroll'
            }
        >
            <FloatInput
                className="absolute top-9 right-10 z-50"
                placeholder="Pesquisar"
            />

            {mobile !== 'mobile' ? <Sidebar /> : <div>Navbar</div>}
            <section className="flex flex-grow flex-col items-start justify-between p-10">
                {children}
            </section>
        </main>
    )
}
