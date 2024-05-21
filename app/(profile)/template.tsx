'use client'
import { motion } from 'framer-motion'
export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.section
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                opacity: { ease: 'linear' },
            }}
            className='flex flex-grow flex-col items-center justify-center max-h-screen overflow-y-auto custom-scroll'
        >
            {children}
        </motion.section>
    )
}
