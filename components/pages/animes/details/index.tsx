import Image from 'next/image'
import { genders } from '../categories'
import { Badge } from '@/components/ui/badge'
import { Toggle } from '@/components/ui/toggle'
import Icon from '@/components/ui/icons'

type DetailsProps = {
    image: string
    title: string
    releaseDate: string
    description: string
    genders: genders
}
export default function Details({
    image,
    genders,
    title,
    description,
    releaseDate,
}: DetailsProps) {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-[250px_1fr] gap-6">
            {image && (
                <Image
                    className="rounded-lg w-[250px] h-[370px]"
                    alt="anime-image"
                    fetchPriority="high"
                    quality={100}
                    src={image}
                    width={250}
                    height={370}
                    priority
                />
            )}
            <div className="flex flex-col gap-2">
                {genders.length && (
                    <div className="flex gap-2">
                        {genders.map((gender) => (
                            <Badge key={gender} variant={'secondary'}>
                                {gender}
                            </Badge>
                        ))}
                    </div>
                )}
                <div className="flex flex-col gap-2">
                    <p className="text-lemon-500 textsize-p1">{releaseDate}</p>
                    <h1 className="text-white textsize-h2">{title}</h1>
                    <p className="text-gray-500 textsize-subtitle2 max-w-[1080px]">
                        {description}
                    </p>
                    <div className="flex gap-2">
                        <Toggle
                            size={'lg'}
                            variant={'secondary'}
                            activeIcon={
                                <Icon
                                    icon="HeartFill"
                                    color="rgb(var(--error))"
                                />
                            }
                            tooltip="Favoritar"
                            activeTooltip="Desfavoritar"
                        >
                            <Icon icon="HeartLine" />
                        </Toggle>
                        <Toggle
                            size={'lg'}
                            variant={'secondary'}
                            activeIcon={
                                <Icon
                                    icon="NotificationFill"
                                    color="rgb(var(--lemon-500))"
                                />
                            }
                            tooltip="Notificar"
                            activeTooltip="Não notificar"
                        >
                            <Icon icon="NotificationLine" />
                        </Toggle>
                    </div>
                </div>
            </div>
        </section>
    )
}
