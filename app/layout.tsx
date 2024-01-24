import '@/app/globals.css'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { fontSans } from '@/components/font'

export const metadata: Metadata = {
    title: 'Animatrix Stream',
    description: 'Stream anime app',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body className={cn(
                'font-sans antialiased',
                fontSans.variable
            )}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    )
}
