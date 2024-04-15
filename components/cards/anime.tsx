import Image from 'next/image'
import { DubLegBadge } from './dub-leg-badge'

type AnimeCardProps = {
    title: string
    subtitle: string
    highlight: string
    image?: string
    sub?: boolean
    dub?: boolean
    onClick?: () => unknown
}

export function AnimeCard({
    title,
    subtitle,
    image,
    highlight,
    onClick,
    sub,
    dub,
}: AnimeCardProps) {
    return (
        <div
            className="relative flex flex-col justify-between w-[130px] h-[210px] sm:w-[250px] sm:h-[350px] rounded-lg bg-cover hover:outline outline-purple-500 cursor-pointer shadow-lg "
            onClick={onClick}
        >
            <Image
                className="absolute z-[0] pointer-events-none select-none object-cover rounded-lg"
                fill
                alt="anime-image"
                fetchPriority="high"
                quality={100}
                src={image || ''}
                sizes="(max-width: 768px) 150px, 350px"
                priority
            />
            <div className="flex items-start gap-1 p-2 sm:p-3 z-[1]">
                {dub && (
                    <DubLegBadge type="dub" variant={'default'}>
                        DUB
                    </DubLegBadge>
                )}
                {sub && <DubLegBadge type="leg">LEG</DubLegBadge>}
            </div>
            <div className="flex flex-col p-2 sm:p-3 min-h-[80px] sm:min-h-[120px] w-full items-start justify-end bg-gradient-to-t from-black-950 from-10% select-none z-[1] rounded-md">
                <h4 className="w-full text-xs/4 sm:text-lg/6  font-bold text-ellipsis line-clamp-2">
                    {title}
                </h4>
                <div className="text-[10px] sm:text-base/6 flex justify-between w-full">
                    <p className="text-black-400 text-ellipsis line-clamp-1">
                        {subtitle}
                    </p>
                    <p className="text-lemon-300">{highlight}</p>
                </div>
            </div>
        </div>
    )
}
