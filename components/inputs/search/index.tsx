'use client'
import { useState } from 'react'
import { useKeyboard } from '@/hooks/useKeyboard'
import { Dialog, DialogOverlay } from '@/components/ui/dialog'
import { SearchInput } from './input'
import { SearchContent } from './content'
import { Content } from '@radix-ui/react-dialog'

export function SearchCommand() {
    const [open, setOpen] = useState(false)
    useKeyboard('k', 'keydown', () => setOpen((open) => !open))
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogOverlay className="flex flex-col gap-2 items-center justify-center">
                <Content className="w-full flex max-h-[600px] h-full flex-col gap-2 items-center justify-center max-w-[1080px]">
                    <SearchInput
                        className="w-full min-h-14"
                        placeholder="Pesquisar por algo"
                        onSearchClick={() => setOpen(false)}
                    />
                    <SearchContent className="w-full h-full" items={1} />
                </Content>
            </DialogOverlay>
        </Dialog>
    )
}
