import { PasswordInput } from '@/components/inputs/password'
import { AuthLayout } from '@/components/pages/animes/auth/layout'
import Icon from '@/components/ui/icons'
import { Input } from '@/components/ui/input'

export default function Sign() {
    return (
        <AuthLayout subtitle=" Entre em sua conta e veja seus animes preferidos">
            <Input
                className="mb-4"
                placeholder="ex: Jorge@gmail.com"
            />
            <PasswordInput placeholder="ex: coxinha123" />
        </AuthLayout>
    )
}
