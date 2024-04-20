'use client'
import { PasswordInput } from '@/components/inputs/password'
import { AuthLayout } from '@/components/pages/animes/auth/layout'
import { Input } from '@/components/ui/input'
import { createSafeUser, registerSchema } from '@/server/actions/auth/register'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { useAction } from 'next-safe-action/hooks'
import { useToast } from '@/components/ui/use-toast'
import * as z from 'zod'
export default function Register() {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
    })
    const { status, execute } = useAction(createSafeUser, {
        onSuccess({ success }) {
            if (!success) return
            toast({
                title: 'Usuário criado com sucesso!',
                description: 'Bem vindo a plataforma',
            })
        },
        onExecute(data) {
            console.log('creating user')
            toast({
                title: 'Usuário criado com sucesso!',
                description: 'Bem vindo a plataforma',
            })
        },
    })
    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        execute(values)
    }
    return (
        <Form {...form}>
            <AuthLayout
                subtitle="Crie sua conta e desfrute da plataforma"
                register={true}
                disabled={status === 'executing'}
                onSubmit={form.handleSubmit(onSubmit)}
            >
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nome de usuário</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="ex: Spam Caxota"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
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
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Confirmar senha</FormLabel>
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
