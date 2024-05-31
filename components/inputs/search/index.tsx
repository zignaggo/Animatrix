'use client'
import { useRef, useState } from 'react'
import { useKeyboard } from '@/hooks/useKeyboard'
import { Dialog, DialogOverlay } from '@/components/ui/dialog'
import { SearchInput } from './input'
import { SearchContent } from './content'
import { Content } from '@radix-ui/react-dialog'
import { useOnStopTyping } from '@/hooks/useOnStopTyping'

export function SearchCommand() {
    const [open, setOpen] = useState(false)
    const [search, setSearch] = useState('')
    const ref = useRef<HTMLInputElement | null>(null)
    useKeyboard('k', 'keydown', () => setOpen((open) => !open))
    useOnStopTyping(search, () => {}, 500)
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogOverlay className="flex flex-col gap-2 items-center justify-center p-6">
                <Content className="w-full flex max-h-[600px] h-full flex-col gap-2 items-center justify-center max-w-[1080px]">
                    <SearchInput
                        className="w-full min-h-14"
                        placeholder="Pesquisar por algo"
                        always
                        redirect={false}
                        ref={ref}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <SearchContent className="w-full h-full" query={search}/>
                </Content>
            </DialogOverlay>
        </Dialog>
    )
}
