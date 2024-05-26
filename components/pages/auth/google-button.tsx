import { Button, ButtonProps } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import { useFormStatus } from 'react-dom'
export function GoogleButton(props: ButtonProps) {
    const { pending } = useFormStatus()
    return (
        <Button
            variant={'secondary'}
            size={'lg'}
            loading={pending}
            loadingText="Carregando"
            {...props}
        >
            <Icon icon="Google" />
            Entrar com google
        </Button>
    )
}
