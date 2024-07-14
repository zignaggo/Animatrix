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
import { Suspense, useEffect, useState } from 'react'
import { ListAvatars } from './list-avatars'
import { TAvatar } from '@/lib/supabase/types'
import { Skeleton } from '@/components/ui/skeleton'
import { selectedAvatarModalStore, avatarProfileStore } from './store'
import { useAtom } from 'jotai'

export function SelectAvatar() {
    const [open, setOpen] = useState<boolean>(false)
    const [avatar, setAvatar] = useAtom(avatarProfileStore)
    const [selectedAvatar, setSelectedAvatar] = useAtom(
        selectedAvatarModalStore
    )
    const handleSetAvatar= () => {
        if (selectedAvatar) {
            setAvatar(selectedAvatar)
        }
        setOpen(false)
    }
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <ImageInput
                image={avatar?.url}
                setImage={(image) => {
                    if (!image) {
                        setAvatar(null)
                        setSelectedAvatar(null)
                        return
                    }
                    setAvatar(avatar)
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
                                defaultValue={JSON.stringify(selectedAvatar)}
                                onValueChange={(value) => {
                                    const avatar = JSON.parse(value) as TAvatar
                                    setSelectedAvatar(avatar)
                                }}
                            />
                        </Suspense>
                    </TabsContent>
                </Tabs>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleSetAvatar()}>
                        Selecionar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
