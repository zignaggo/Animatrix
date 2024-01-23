import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navigation/Navbar'
import { fontSans } from '@/components/font'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main
            className={cn(
                'grid grid-cols-1 md:grid-cols-[auto_1fr] min-h-screen bg-background font-sans antialiased',
                fontSans.variable
            )}
        >
            <Navbar />
            <section className="flex flex-grow flex-col items-start justify-between p-10">
                {children}
            </section>
        </main>
    )
}
