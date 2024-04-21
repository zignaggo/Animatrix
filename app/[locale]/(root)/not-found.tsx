import { Button } from '@/components/ui/button'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="p-10 w-full flex flex-grow flex-col gap-4 items-center justify-center">
            <div className="flex flex-col items-center">
                <h2 className="textsize-h3 text-white">
                    Página não{' '}
                    <span className="text-lemon-500">encontrada</span>
                </h2>
                <p>Parece que essa página não existe ou foi removida :( </p>
            </div>
            <Link href="/animes">
                <Button>
                    <ChevronLeft />
                    Voltar para o início
                </Button>
            </Link>
        </div>
    )
}
