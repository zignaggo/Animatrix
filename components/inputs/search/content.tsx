import { cn } from '@/lib/utils'
import { TextSearch } from 'lucide-react'
type SearchProps = React.HTMLAttributes<HTMLDivElement> & {
    items?: number
}
const SearchContent = ({
    className,
    items = 0,
    children,
    ...props
}: SearchProps) => (
    <div
        className={cn(
            'flex flex-col rounded-lg gap-2 p-6 bg-black-800',
            className
        )}
        {...props}
    >
        <div className="flex gap-2">
            <TextSearch />
            {!!items ? (
                <>
                    {items}
                    <p>Items encontrados </p>
                </>
            ) : (
                <>
                    <p>Nenhum item encontrado </p>
                </>
            )}
        </div>
        {children}
    </div>
)
SearchContent.displayName = 'SearchContent'
export { SearchContent }
