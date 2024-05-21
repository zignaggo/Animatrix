'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Loading from './loading'
export default function Template({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false)
        }, 2500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
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
            {loading ? <Loading /> : children}
        </motion.section>
    )
}
