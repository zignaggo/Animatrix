'use client'
import { auth } from '@/app/firabase/config'
import { AuthLayout } from '@/components/pages/animes/auth/layout'
import { Input } from '@/components/ui/input'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRef } from 'react'
import { toast } from 'sonner'

export default function Register() {
    const email = useRef<HTMLInputElement | null>(null)
    const password = useRef<HTMLInputElement | null>(null)
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
            {/* <Input className="mb-4" placeholder="ex: cleberson" /> */}
            <Input
                className="mb-4"
                placeholder="ex: Jorge@gmail.com"
                ref={email}
            />
            <Input
                className="mb-4"
                placeholder="ex: coxinha123"
                ref={password}
            />
            {/* <Input placeholder="ex: coxinha123" /> */}
        </AuthLayout>
    )
}
