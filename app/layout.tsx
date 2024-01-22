import "@/app/globals.css";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/navigation/Navbar";

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
        <html lang="pt">
            <body
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    poppins.variable
                )}
            >
                <Navbar />
                {children}
            </body>
        </html>
    );
}
