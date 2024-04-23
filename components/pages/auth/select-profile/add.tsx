import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"
import { Plus } from "lucide-react"
import { forwardRef } from "react"

export interface AddButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    loading?: boolean
    loadingText?: string
}

const Add = forwardRef<HTMLButtonElement, AddButtonProps>(
    (
        {
            className,
            children,
            loadingText,
            loading = false,
            asChild = false,
            ...props
        },
        ref
    ) => {
        const Comp = asChild ? Slot : 'button'
        return (
            <Comp
                className={cn('h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] bg-black-900 hover:bg-black-800 active:bg-black-700 rounded-full flex items-center justify-center  text-black-600 active:text-black-300',className)}
                ref={ref}
                {...props}
            >
                <Plus className="w-12 h-12" />
            </Comp>
        )
    }
)
Add.displayName = 'AddButton'

export { Add }
