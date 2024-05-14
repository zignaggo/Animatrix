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
import { createProfileSafer } from '@/server/actions/profile/create'
import { createProfileSchema } from '@/server/actions/profile/create/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Plus, X } from 'lucide-react'
import { useRouter } from 'next-nprogress-bar'
import { useAction } from 'next-safe-action/hooks'
import { revalidatePath } from 'next/cache'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function AddProfile() {
    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<z.infer<typeof createProfileSchema>>({
        resolver: zodResolver(createProfileSchema),
        defaultValues: {
            name: '',
            language: 'pt-br',
        },
    })
    const { status, execute } = useAction(createProfileSafer, {
        onSuccess() {
            toast({
                title: 'Perfil criado',
                description: 'Entre e acesse a plataforma',
            })
            router.push('/choose-profile')
        },
        onError({ serverError }) {
            toast({
                title: 'Ocorreu um erro',
                description: serverError,
                variant: 'destructive',
            })
        },
    })
    const onSubmit = (values: z.infer<typeof createProfileSchema>) => {
        execute(values)
    }
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex flex-col h-fit w-fit gap-6"
            >
                <h2 className="textsize-h2 text-black-400">Criar Perfil</h2>
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
                                        <SelectTrigger className="min-w-[384px]">
                                            <SelectValue placeholder="Selecionar Linguagem" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="pt-br">
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
                <div className="flex gap-4">
                    <Button
                        size="lg"
                        variant="secondary"
                        className="w-full"
                        onClick={() => router.replace('/choose-profile')}
                        type="button"
                    >
                        <X /> Cancelar
                    </Button>
                    <Button
                        size="lg"
                        className="w-full"
                        loading={status === 'executing'}
                        loadingText="Carregando"
                        type="submit"
                        disabled={form.formState.isSubmitSuccessful}
                    >
                        <Plus /> Criar
                    </Button>
                </div>
            </form>
        </Form>
    )
}
