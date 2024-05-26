import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { DetailedHTMLProps, FormHTMLAttributes, ReactNode } from 'react'
import { GoogleButton } from './google-button'
import { signWithGoogleSafer } from '@/server/actions/auth/sign'

type LayoutProps = {
    subtitle: string
    children: ReactNode
    register?: boolean
    loading?: boolean
    disabled?: boolean
} & DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
export function AuthLayout({
    children,
    subtitle,
    register = false,
    loading = false,
    disabled = false,
    action,
    ...props
}: LayoutProps) {
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
            <form action={signWithGoogleSafer}>
                <GoogleButton className="w-full" />
            </form>
        </div>
    )
}
