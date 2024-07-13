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
import { ReactNode, useState } from 'react'

export function SelectAvatar({ children }: { children?: ReactNode }) {
    const [image, setImage] = useState<string | null>(null)
    const [open, setOpen] = useState<boolean>(false)
    return (
        <AlertDialog open={open} onOpenChange={setOpen}>
            <ImageInput
                image={image}
                setImage={setImage}
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
                        {children}
                    </TabsContent>
                </Tabs>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction onClick={() => setOpen(false)}>
                        {/* 'https://lh3.googleusercontent.com/a/ACg8ocJIn2-nP5dFK3ixbjzhy_xmXTFYhToayX1vYzcr-piqQvykJOvU=s96-c' */}
                        Selecionar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
