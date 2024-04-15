import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function Episodes() {
    return (
        <div className="p-4 mt-4 grid w-full grid-rows-[auto_1fr] bg-black-900 rounded-md min-h-64">
            <Select>
                <SelectTrigger className="w-[320px]">
                    <SelectValue placeholder="Selecionar temporada" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Temporada 1</SelectItem>
                    <SelectItem value="2">Temporada 2</SelectItem>
                    <SelectItem value="3">Temporada 3</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}
