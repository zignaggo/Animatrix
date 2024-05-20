export default async function Layout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <main className="flex h-svh bg-background">{children}</main>
}
