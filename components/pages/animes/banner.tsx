'use client'
import { Header } from '@/components/navigation/Header'
import { Button } from '@/components/ui/button'
import Icon from '@/components/ui/icons'
import Image from 'next/image'
import { Toggle } from '@/components/ui/toggle'
import {
    TooltipTrigger,
    TooltipContent,
    Tooltip,
} from '@/components/ui/tooltip'

interface Banner {
    image: string
    title: string
    description: string
    avaliation: number
    to?: string
}

export default function Banner({ title, description, image }: Banner) {
    return (
        <section className="w-full md:aspect-video h-fit md:max-h-[70svh] min-h-[50svh] relative banner-shadow main-banner">
            <Image
                src={image}
                alt="banner"
                fill
                sizes="100vw"
                className="object-cover"
                priority
            />
            <section className="relative h-fit z-[2] text-gray-100 p-6 sm:p-10">
                <Header title="Animes" subtitle="Principal" />
                <div className="flex flex-col gap-6 mt-6">
                    <div>
                        <p className="text-h4 text-lemon-500">
                            Destaque da Semana
                        </p>
                        <h1 className="text-h3">{title}</h1>
                    </div>
                    <p className="text-subtitle-2 max-w-[600px] text-shadow-sm overflow-hidden text-ellipsis line-clamp-5">
                        {description}
                    </p>
                    <div className="flex items-center gap-2">
                        <Button size={'lg'} className="w-fit">
                            Assitir Agora <Icon icon="TvTwoLine" />
                        </Button>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Toggle
                                    size={'lg'}
                                    variant={'secondary'}
                                    activeIcon={
                                        <Icon
                                            icon="HeartFill"
                                            color="rgb(var(--error))"
                                        />
                                    }
                                >
                                    <Icon icon="HeartLine" />
                                </Toggle>
                            </TooltipTrigger>
                            <TooltipContent>Favoritar</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Toggle
                                    size={'lg'}
                                    variant={'secondary'}
                                    activeIcon={
                                        <Icon
                                            icon="NotificationFill"
                                            color="rgb(var(--lemon-500))"
                                        />
                                    }
                                >
                                    <Icon icon="NotificationLine" />
                                </Toggle>
                            </TooltipTrigger>
                            <TooltipContent>Notificar</TooltipContent>
                        </Tooltip>
                    </div>
                </div>
            </section>
        </section>
    )
}
