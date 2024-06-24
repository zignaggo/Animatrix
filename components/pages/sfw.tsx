'use client'
import { motion } from 'framer-motion'
import { ScanEyeIcon } from 'lucide-react'
import { ReactNode, useState } from 'react'
import { Button } from '../ui/button'
import { useRouter } from 'next-nprogress-bar'

type SFWProps = {
    children: ReactNode
    isSafe?: boolean
}
export function SFW({ children, isSafe }: SFWProps) {
    const [watch, setWatch] = useState(isSafe || null)
    const route = useRouter()
    return watch ? (
        children
    ) : (
        <motion.div
        layout
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
            scale: { ease: 'easeOut' },
        }} className="flex items-center justify-center flex-col flex-grow gap-2">
            <div className="w-36 h-36 grid place-items-center bg-purple-600 rounded-2xl">
                <ScanEyeIcon size={64} />
            </div>
            <h3>Parece que esse conteúdo é sensível</h3>
            <p className="textsize-subtitle-1 text-gray-500">
                Deseja realmente ver esse conteúdo?
            </p>
            <div className="mt-6">
                <Button
                    variant="secondary"
                    size="lg"
                    className="mr-4"
                    onClick={() => route.push('/animes')}
                >
                    Sair
                </Button>
                <Button size="lg" onClick={() => setWatch(true)}>
                    Ver conteúdo
                </Button>
            </div>
        </motion.div>
    )
}
