import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Toggle } from '@/components/ui/toggle'
import { Icon } from '@/components/ui/icons'
import { genders } from '@/myanimelist/types'

type DetailsProps = {
    image: string
    title: string
    releaseDate: string
    description: string
    genders: genders[]
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
                <div className="relative w-full sm:w-[250px] aspect-[0.71428571428/1]">
                    <Image
                        className="rounded-lg"
                        alt="anime-image"
                        fetchPriority="high"
                        quality={100}
                        src={image}
                        fill
                        sizes="250px"
                        priority
                    />
                </div>
            )}
            <div className="w-full flex flex-col gap-2">
                {genders.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                        {genders.map((gender) => (
                            <Badge key={gender} variant="secondary">
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
                            size="lg"
                            variant="secondary"
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
                            size="lg"
                            variant="secondary"
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
