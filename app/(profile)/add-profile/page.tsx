'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Plus, X } from 'lucide-react'
import { useRouter } from 'next-nprogress-bar'

export default function AddProfile() {
    const router = useRouter()
    return (
        <form className="flex flex-col h-fit w-fit gap-6">
            <h2 className="textsize-h2 text-black-400">Criar Perfil</h2>
            <div className="flex flex-col gap-2">
                <Label className="textsize-p2">Nome do perfil</Label>
                <Input placeholder="Ex: Nicolas" />
                <Label className="textsize-p2">Linguagem</Label>
                <Select>
                    <SelectTrigger className="min-w-[384px]">
                        <SelectValue placeholder="Selecionar Linguagem" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="pt-br">Português</SelectItem>
                        <SelectItem value="en">Inglês</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div className="flex gap-4">
                <Button
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    onClick={() => router.replace('/choose-profile')}
                    type="button"
                >
                    <X /> Cancelar
                </Button>
                <Button size="lg" className="w-full">
                    <Plus /> Criar
                </Button>
            </div>
        </form>
    )
}
