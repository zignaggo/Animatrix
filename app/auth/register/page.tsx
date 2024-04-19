'use client'
import { auth } from '@/app/firabase/config'
import { PasswordInput } from '@/components/inputs/password'
import { AuthLayout } from '@/components/pages/animes/auth/layout'
import { Input } from '@/components/ui/input'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRef } from 'react'
import { toast } from 'sonner'

export default function Register() {
    const name = useRef<HTMLInputElement | null>(null)
    const email = useRef<HTMLInputElement | null>(null)
    const password = useRef<HTMLInputElement | null>(null)
    const confirmPassword = useRef<HTMLInputElement | null>(null)
    const createUser = async () => {
        if (!email.current?.value || !password.current?.value) return
        await createUserWithEmailAndPassword(
            auth,
            email.current.value,
            password.current.value
        )
        toast('Usuário criado com sucesso', {
            closeButton: true,
            duration: 10000,
            description: 'Você já pode acessar a plataforma!',
        })
    }
    return (
        <AuthLayout
            subtitle="Crie sua conta e desfrute da plataforma"
            register={true}
            onClick={createUser}
        >
            <Input
                className="mb-4"
                placeholder="ex: Jorge@gmail.com"
                ref={name}
            />
            <Input
                className="mb-4"
                placeholder="ex: Jorge@gmail.com"
                ref={email}
            />
            <PasswordInput
                className="mb-4"
                placeholder="ex: coxinha123"
                ref={password}
            />
            <PasswordInput placeholder="ex: coxinha123" ref={confirmPassword} />
        </AuthLayout>
    )
}
