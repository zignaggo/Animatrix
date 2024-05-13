'use client'
import { PasswordInput } from '@/components/inputs/password'
import { AuthLayout } from '@/components/pages/auth/layout'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { signInSafer } from '@/server/actions/auth/sign'
import { signSchema } from '@/server/actions/auth/sign/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useRouter } from 'next-nprogress-bar';
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export default function Sign() {
    const { toast } = useToast();
    const route = useRouter();
    const form = useForm<z.infer<typeof signSchema>>({
        resolver: zodResolver(signSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    })
    const { status, execute } = useAction(signInSafer, {
        onSuccess() {
            toast({
                title: 'Bem vindo ao animatrix',
                description: 'Sessão iniciada!',
            })
            route.push('/animes')
        },
        onError({ serverError }) {
            toast({
                title: 'Ocorreu um erro',
                description: serverError,
                variant: 'destructive',
            })
        },
    })
    const onSubmit = (values: z.infer<typeof signSchema>) => {
        execute(values)
    }
    return (
        <Form {...form}>
            <AuthLayout
                subtitle="Entre em sua conta e veja seus animes preferidos"
                loading={status === 'executing'}
                onSubmit={form.handleSubmit(onSubmit)}
                disabled={form.formState.isSubmitted}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="ex: Jorge@gmail.com"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Senha</FormLabel>
                            <FormControl>
                                <PasswordInput
                                    placeholder="ex: coxinha123"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
            </AuthLayout>
        </Form>
    )
}
