export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="flex h-svh bg-background">
            <section className="flex flex-grow flex-col items-center justify-center max-h-screen overflow-y-auto custom-scroll">
                {children}
            </section>
        </main>
    )
}
