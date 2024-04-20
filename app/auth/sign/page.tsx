'use client'
import { PasswordInput } from '@/components/inputs/password'
import { AuthLayout } from '@/components/pages/animes/auth/layout'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import Icon from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { signInSafer } from '@/server/actions/auth/sign'
import { signSchema } from '@/server/actions/auth/sign/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

export default function Sign() {
    const { toast } = useToast()
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
                description: 'test',
            })
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
                disabled={status === 'executing'}
                onSubmit={form.handleSubmit(onSubmit)}
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
