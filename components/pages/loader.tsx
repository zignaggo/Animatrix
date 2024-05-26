'use client'
import Icon from '@/components/ui/icons'
import { motion, Variants } from 'framer-motion'
export function Loader() {
    const variants = (index: number): Variants => ({
        initial: {
            opacity: 0,
            scale: 0.8,
        },
        bounce: {
            y: [10, -10, 5, 0],
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: 'easeIn',
                delay: index * 0.12,
            },
        },
    })
    const letters = 'Animatrix'.split('')
    return (
        <motion.div className="w-screen h-screen flex flex-col gap-6 items-center justify-center bg-black-950">
            <Icon icon="LogoLoading" color="#6F4CE8" />
            <div className="flex gap-1">
                {letters.map((letter, index) => (
                    <motion.span
                        className="textsize-h1 text-purple-500"
                        key={index}
                        animate="bounce"
                        variants={variants(index)}
                    >
                        {letter}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    )
}
