import { AuthLayout } from '@/components/pages/animes/auth/layout'
import { Input } from '@/components/ui/input'

export default function Register() {
    return (
        <AuthLayout
            subtitle="Crie sua conta e desfrute da plataforma"
            hasAccount={true}
        >
            <Input className="mb-4" placeholder="ex: cleberson" />
            <Input className="mb-4" placeholder="ex: Jorge@gmail.com" />
            <Input className="mb-4" placeholder="ex: coxinha123" />
            <Input placeholder="ex: coxinha123" />
        </AuthLayout>
    )
}
