import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../ui/alert-dialog'
import { AlertDialogProps } from '@radix-ui/react-alert-dialog'
import { signOut } from '@/server/actions/auth/sign'
type ConfirmExitProps = AlertDialogProps
export function ConfirmExit(props: ConfirmExitProps) {
    return (
        <AlertDialog {...props}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Certeza que deseja sair?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Poxa vida já vai sair? tem certeza que olhou tudo? é bom
                        você voltar!!
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter action={signOut}>
                    <AlertDialogCancel type="button">
                        Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction variant={'danger'} type="submit">
                        Sair
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
