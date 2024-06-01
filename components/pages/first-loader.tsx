'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Loader } from './loader'
import { usePathname } from 'next/navigation'
import { publicRoutes } from '@/utils'

export function FirstLoading({ children }: { children: React.ReactNode }) {
    const path = usePathname()
    const isPublicRoute = publicRoutes.includes(path)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false)
        }, 2500)
        return () => {
            clearTimeout(timeout)
        }
    }, [])
    if (loading && !isPublicRoute) {
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
    return children
}
