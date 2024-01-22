import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navigation/Navbar";
import { ThemeProvider } from "@/components/theme-provider";

export const poppins = Poppins({
    weight: ["200", "200", "300", "400", "500", "600", "700", "800"],
    subsets: ["latin"],
    variable: "--font-sans",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-br" suppressHydrationWarning>
            <body
                className={cn(
                    "grid grid-cols-1 md:grid-cols-[70px_1fr] min-h-screen bg-background font-sans antialiased",
                    poppins.variable
                )}
            >
                <ThemeProvider
                    attribute="class"
                    defaultTheme="dark"
                    enableSystem
                    disableTransitionOnChange
                >
                    <Navbar />
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
