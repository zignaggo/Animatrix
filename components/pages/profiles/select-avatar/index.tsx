'use client'
import { ImageInput } from '@/components/inputs/Image'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Suspense, useState } from 'react'
import { ListAvatars } from './list-avatars'
import { TAvatar } from '@/lib/supabase/types'
import { Skeleton } from '@/components/ui/skeleton'
import { selectedAvatar } from './store'
import { useAtom } from 'jotai'

export function SelectAvatar() {
    const [open, setOpen] = useState<boolean>(false)
    const [image, setImage] = useState<string | null>(null)
    const [avatar, setAvatar] = useAtom(selectedAvatar)
    const handleSetImage = () => {
        if (avatar) {
            setImage(avatar.url)
        }
        setOpen(false)
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <ImageInput
                image={image}
                setImage={(image) => {
                    if(!image) {
                        setAvatar(null)
                    }
                    setImage(image)
                }}
                onClick={() => setOpen(true)}
            />
            <AlertDialogContent className="max-w-[720px]">
                <AlertDialogHeader>
                    <AlertDialogTitle>Selecionar avatar</AlertDialogTitle>
                </AlertDialogHeader>
                <Tabs defaultValue="myAccount" className="w-full">
                    <TabsList>
                        <TabsTrigger value="myAccount">Minha Conta</TabsTrigger>
                        <TabsTrigger value="others">Outros</TabsTrigger>
                    </TabsList>
                    <TabsContent value="myAccount" className="px-2">
                        <Suspense
                            fallback={
                                <div className="flex gap-2">
                                    <Skeleton className="h-16 w-16 rounded-full" />
                                    <Skeleton className="h-16 w-16 rounded-full" />
                                    <Skeleton className="h-16 w-16 rounded-full" />
                                </div>
                            }
                        >
                            <ListAvatars
                                onValueChange={(value) => {
                                    const avatar = JSON.parse(value) as TAvatar
                                    setAvatar(avatar)
                                }}
                            />
                        </Suspense>
                    </TabsContent>
                </Tabs>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleSetImage()}>
                        Selecionar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
