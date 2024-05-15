export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <main className="grid grid-cols-1 md:grid-cols-[3fr_666px] h-svh">
            <section className="bg-black-900 hidden md:flex"></section>
            <section className="p-10 flex items-center justify-center bg-black-950">
                {children}
            </section>
        </main>
    )
}
