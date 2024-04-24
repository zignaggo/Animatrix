import { cn } from "@/lib/utils"

interface HeaderProps {
    title: string
    subtitle: string
    className?: string
}
export function Header({ subtitle, title, className }: HeaderProps) {
    return (
        <header className={cn("flex flex-col items-start justify-center", className)}>
            <p className="text-black-400 textsize-subtitle2">{subtitle}</p>
            <h3 className="textsize-h2">{title}</h3>
        </header>
    )
}
