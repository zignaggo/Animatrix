'use client'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useToast } from '@/components/ui/use-toast'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, X } from 'lucide-react'
import { useRouter } from 'next-nprogress-bar'
import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { SelectAvatar } from '../select-avatar'
import { useAtom } from 'jotai'
import {
    selectedAvatarModalStore,
    avatarProfileStore,
} from '../select-avatar/store'
import { TProfile } from '@/lib/supabase/types'
import { updateProfileSafer } from '@/server/actions/profile/update'
import { useEffect } from 'react'
import { updateProfileSchema } from '@/server/actions/profile/update/schema'

type UpdateProfileFormProps = {
    profile?: TProfile
}
export function UpdateProfileForm({ profile }: UpdateProfileFormProps) {
    const router = useRouter()
    const { toast } = useToast()
    const [avatar, setAvatar] = useAtom(avatarProfileStore)
    const [_, setSelectedAvatarModal] = useAtom(selectedAvatarModalStore)
    const form = useForm<z.infer<typeof updateProfileSchema>>({
        resolver: zodResolver(updateProfileSchema),
        defaultValues: {
            id: profile?.id,
            name: profile?.name,
            language: profile?.language,
        },
    })
    const { status, execute } = useAction(updateProfileSafer, {
        onSuccess() {
            toast({
                title: 'Perfil atualizado com sucesso',
                description: 'vlw comparsa',
            })
            router.replace('/choose-profile')
        },
        onError({ serverError }) {
            toast({
                title: 'Ocorreu um erraao',
                description: serverError,
                variant: 'destructive',
            })
        },
    })
    const onSubmit = (values: z.infer<typeof updateProfileSchema>) => {
        execute({
            ...values,
            ...{
                selected_avatar: avatar?.id || null,
            },
        })
        if (!avatar) {
            setAvatar(null)
            setSelectedAvatarModal(null)
        }
    }
    useEffect(() => {
        setAvatar(profile?.avatar || null)
        setSelectedAvatarModal(profile?.avatar || null)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile])
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col h-fit w-fit gap-6 p-6 items-center"
            >
                <h2 className="textsize-h2 text-black-400">Atualizar Perfil</h2>
                <SelectAvatar />
                <div className="flex flex-col gap-2">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="textsize-p2">
                                    Nome do perfil
                                </FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Ex: Nicolas"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="language"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="textsize-p2">
                                    Linguagem
                                </FormLabel>
                                <Select
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    value={field.value}
                                >
                                    <FormControl>
                                        <SelectTrigger className="sm:min-w-[384px]">
                                            <SelectValue placeholder="Selecionar Linguagem" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="pt">
                                            Português
                                        </SelectItem>
                                        <SelectItem value="en">
                                            Inglês
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-wrap sm:flex-nowrap gap-4 w-full">
                    <Button
                        size="lg"
                        variant="secondary"
                        className="w-full"
                        onClick={() => router.replace('/choose-profile?edit=true')}
                        type="button"
                    >
                        <X /> Cancelar
                    </Button>
                    <Button
                        size="lg"
                        className="w-full"
                        variant="success"
                        loading={status === 'executing'}
                        loadingText="Carregando"
                        type="submit"
                        disabled={status === 'hasSucceeded'}
                    >
                        Salvar
                    </Button>
                </div>
            </form>
        </Form>
    )
}
