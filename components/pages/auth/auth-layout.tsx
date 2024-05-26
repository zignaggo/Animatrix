import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import {
    DetailedHTMLProps,
    FormHTMLAttributes,
    MouseEvent,
    ReactNode,
} from 'react'
import { signSocialAuthSafer } from '@/server/actions/auth/sign'
import { socialAuthSchema } from '@/server/actions/auth/sign/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useAction } from 'next-safe-action/hooks'
import { FieldValues, UseFormReturn, useForm } from 'react-hook-form'

import * as z from 'zod'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Provider } from '@supabase/supabase-js'
import Icon from '@/components/ui/icons'
type LayoutProps<T extends FieldValues> = {
    subtitle: string
    children: ReactNode
    register?: boolean
    loading?: boolean
    disabled?: boolean
    form: UseFormReturn<T>
} & DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
export function AuthLayout<T extends FieldValues>({
    children,
    subtitle,
    register = false,
    loading = false,
    disabled = false,
    action,
    form,
    ...props
}: LayoutProps<T>) {
    const socialForm = useForm<z.infer<typeof socialAuthSchema>>({
        resolver: zodResolver(socialAuthSchema),
        defaultValues: {
            provider: 'google',
        },
    })
    const onSubmit = (provider: Provider) => {
        execute({ provider })
    }
    const { status, execute } = useAction(signSocialAuthSafer)
    const handleProviderClick = (e: MouseEvent<HTMLButtonElement>) => {
        onSubmit(e.currentTarget.value as Provider) // Submit the form
    }
    return (
        <div className="w-full flex flex-col max-w-[395px] gap-6 h-fit">
            <div className="text-center">
                <h1 className="textsize-h2 text-white">
                    Bem vindo ao{' '}
                    <span className="text-purple-500">Animatrix</span>
                </h1>
                <p className="textsize-subtitle1 text-gray-400 max-w-[385px]">
                    {subtitle}
                </p>
            </div>
            <Form {...form}>
                <form className="flex flex-col gap-6" {...props}>
                    <div className="flex flex-col gap-2">{children}</div>
                    <Button
                        className="w-full"
                        size={'lg'}
                        type="submit"
                        loading={loading}
                        loadingText="Carregando"
                        disabled={disabled}
                    >
                        {register ? 'Cadastrar' : 'Entrar'}
                    </Button>
                </form>
            </Form>
            <span className="textsize-p1">
                {!register ? 'Ainda não tem conta? ' : 'Já tem conta? '}
                <Link
                    href={`/auth/${register ? 'sign' : 'register'}`}
                    className="text-purple-500"
                >
                    {!register ? 'Crie aqui' : 'Entrar'}
                </Link>
            </span>
            <div className="flex gap-2 w-full items-center text-black-600">
                <Separator className="shrink bg-black-600" />
                <span>ou</span>
                <Separator className="shrink bg-black-600" />
            </div>
            <Form {...socialForm}>
                <form>
                    <FormField
                        control={socialForm.control}
                        name="provider"
                        render={({ field }) => (
                            <FormItem className="flex space-y-0 gap-2 items-center">
                                <FormControl>
                                    <>
                                        <Button
                                            name={field.name}
                                            value="google"
                                            variant={'secondary'}
                                            size={'lg'}
                                            className="w-full"
                                            loading={status === 'executing'}
                                            onClick={handleProviderClick}
                                        >
                                            <Icon icon="Google" />
                                        </Button>
                                        <Button
                                            variant={'secondary'}
                                            size={'lg'}
                                            name={field.name}
                                            value="discord"
                                            className="w-full"
                                            loading={status === 'executing'}
                                            onClick={handleProviderClick}
                                        >
                                            <Icon icon="Discord" />
                                        </Button>
                                        <Button
                                            name={field.name}
                                            value="github"
                                            variant={'secondary'}
                                            size={'lg'}
                                            className="w-full"
                                            loading={status === 'executing'}
                                            onClick={handleProviderClick}
                                        >
                                            <Icon icon="Github" />
                                        </Button>
                                    </>
                                </FormControl>
                            </FormItem>
                        )}
                    />
                </form>
            </Form>
        </div>
    )
}
