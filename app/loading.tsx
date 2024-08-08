'use client'
import { Loader } from '@/components/pages/loader'
import { motion } from 'framer-motion'
export default function Loading() {
    return (
        <motion.section
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                opacity: {
                    ease: 'linear',
                    duration: 1,
                },
            }}
        >
            <Loader />
        </motion.section>
    )
}
