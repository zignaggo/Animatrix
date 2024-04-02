import { AnimeCard } from '@/components/cards/anime'
import Image from 'next/image'

export default function Animes() {
    return (
        <section className="w-full flex flex-col">
            <section className="w-full h-[550px] relative banner-shadow">
                <Image
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfsJbKc-p-cmZqhHiQVu2p6pTslhqKr3POsgSsiP0zbOQMq6AtnYwMsyXhwbMiBfS7c-okBokZ3PppO_9uVnryf6ad82-Fj0YlGoJQfy72U_lAzhLnqLVXfI3Sc3V37sYfEC5dPRriCRoKACIFlI3v3WQ1hWoATFGpncfZMXkPeD9EPZeBK8g7G6EOkJen/s1920/solo-leveling.png"
                    alt="banner"
                    fill
                    sizes="100vw"
                    objectFit="cover"
                />
            </section>
            <section className="flex flex-wrap justify-center sm:justify-start gap-6 sm:gap-4 w-full p-6 sm:p-10">
                <AnimeCard
                    title="Vinland Sadasdadsddsadasdsadasdsdd  dsad sadasdasdga 2"
                    subtitle={'Temporada 2'}
                    highlight={'12 eps'}
                    url={
                        'https://br.web.img3.acsta.net/pictures/19/09/16/17/09/4903250.jpg'
                    }
                />
                <AnimeCard
                    title="Vinland Saga 2"
                    subtitle={'Temporada 2'}
                    highlight={'12 eps'}
                    url={
                        'https://br.web.img3.acsta.net/pictures/19/09/16/17/09/4903250.jpg'
                    }
                />
                <AnimeCard
                    title="Vinland Saga 2"
                    subtitle={'Temporada 2'}
                    highlight={'12 eps'}
                    url={
                        'https://br.web.img3.acsta.net/pictures/19/09/16/17/09/4903250.jpg'
                    }
                />
                <AnimeCard
                    title="Vinland Saga 2"
                    subtitle={'Temporada 2'}
                    highlight={'12 eps'}
                    url={
                        'https://br.web.img3.acsta.net/pictures/19/09/16/17/09/4903250.jpg'
                    }
                />
            </section>
        </section>
    )
}
