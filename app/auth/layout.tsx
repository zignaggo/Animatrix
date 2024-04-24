export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    // minmax(340px, 666px)
    return (
        <main className="grid grid-cols-[3fr_666px] h-svh">
            <section className="bg-black-900"></section>
            <section className="p-10 flex items-center justify-center bg-black-950">{children}</section>
        </main>
    )
}
