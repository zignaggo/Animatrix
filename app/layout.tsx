import '@/app/globals.css'
import { Metadata } from 'next'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { fontSans } from '@/components/font'
import { TooltipProvider } from '@/components/ui/tooltip'
import NextTopLoader from 'nextjs-toploader';
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
            <body className={cn('font-sans antialiased', fontSans.variable)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <NextTopLoader color='#602DE7' shadow={'0 0 20px #fff,0 0 10px #fff'} height={4}/>
                    <TooltipProvider delayDuration={500}>{children}</TooltipProvider>
                </ThemeProvider>
            </body>
        </html>
    )
}
