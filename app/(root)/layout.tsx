'use client'
import { Navbar } from '@/components/navigation/Navbar'
import { useMediaQuery } from '@/utils/useMediaQuery'

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const smallerMd = useMediaQuery('(max-width: 768px)')
    return (
        <main
            className={'grid grid-cols-1 md:grid-cols-[auto_1fr] min-h-svh bg-background'}
        >
            {!smallerMd ? <Navbar /> : null}

            <section className="flex flex-grow flex-col items-start justify-between p-10">
                {children}
            </section>
        </main>
    )
}
