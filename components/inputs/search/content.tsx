import { SearchAnimes } from '@/components/pages/search/animes'
import { cn } from '@/lib/utils'
import { TextSearch } from 'lucide-react'
type SearchProps = React.HTMLAttributes<HTMLDivElement> & {
    query?: string
}
const SearchContent = ({
    className,
    children,
    query,
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
            {query}
        </div>
    </div>
)
SearchContent.displayName = 'SearchContent'
export { SearchContent }
