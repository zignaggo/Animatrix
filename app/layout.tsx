import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { Navbar } from '@/components/navigation/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { fontSans } from '@/components/font'

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body
                className={cn(
                    'grid grid-cols-1 md:grid-cols-[auto_1fr] min-h-screen bg-background font-sans antialiased',
                    fontSans.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    <main className="flex flex-grow flex-col items-start justify-between p-10">
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    )
}
