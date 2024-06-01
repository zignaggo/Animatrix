'use client'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { ChevronLeft, Slash } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next-nprogress-bar'
import { IconButton } from '@/components/ui/icon-button'
export default function Breadcrumbs({ slug }: { slug: string }) {
    const router = useRouter()
    return (
        <Breadcrumb>
            <BreadcrumbList>
                <IconButton
                    size="sm"
                    variant="text"
                    onClick={() => router.back()}
                >
                    <ChevronLeft />
                </IconButton>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={'/animes'}>Animes</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                    <Slash />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                        <Link href={`/${slug}`}> {slug}</Link>
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
