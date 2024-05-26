import { Button, ButtonProps } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
export function GoogleButton(props: ButtonProps) {
    return (
        <Button
            variant={'secondary'}
            size={'lg'}
            {...props}
        >
            <Icon icon="Google" />
        </Button>
    )
}
