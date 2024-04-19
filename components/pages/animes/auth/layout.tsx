import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import { ReactNode } from 'react'

type LayoutProps = {
    subtitle: string
    children: ReactNode
    hasAccount: boolean
}
export function AuthLayout({ children, subtitle, hasAccount }: LayoutProps) {
    return (
        <div className="w-full flex flex-col max-w-[395px] gap-6 h-fit">
            <div className=" text-center">
                <h1 className="textsize-h2 text-white">
                    Bem vindo ao{' '}
                    <span className="text-purple-500">Animatrix</span>
                </h1>
                <p className="textsize-subtitle1 text-gray-400 max-w-[385px]">
                    {subtitle}
                </p>
            </div>
            <div>{children}</div>
            <div className="w-full">
                <Button className="w-full" size={'lg'}>
                    Entrar
                </Button>
            </div>
            <span className="textsize-p1">
                {!hasAccount ? "Ainda não tem conta? " : "Já tem conta? "}
                <Link href={`/auth/${hasAccount ? 'sign': 'register'}`} className="text-purple-500">
                    {!hasAccount ? "Crie aqui" : "Entrar"}
                </Link>
            </span>
            <div className="flex gap-2 w-full items-center text-black-600">
                <Separator className="shrink bg-black-600" />
                <span>ou</span>
                <Separator className="shrink bg-black-600" />
            </div>
            <Button className="w-full" variant={'secondary'} size={'lg'}>
                <Icon icon="Google" />
                Entrar com google
            </Button>
        </div>
    )
}
