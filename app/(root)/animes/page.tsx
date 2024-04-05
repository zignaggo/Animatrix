import { AnimeCard } from '@/components/cards/anime'
import Image from 'next/image'
import Banner from './banner'

export default function Animes() {
    return (
        <section className="w-full flex flex-col">
            <Banner
                image="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfsJbKc-p-cmZqhHiQVu2p6pTslhqKr3POsgSsiP0zbOQMq6AtnYwMsyXhwbMiBfS7c-okBokZ3PppO_9uVnryf6ad82-Fj0YlGoJQfy72U_lAzhLnqLVXfI3Sc3V37sYfEC5dPRriCRoKACIFlI3v3WQ1hWoATFGpncfZMXkPeD9EPZeBK8g7G6EOkJen/s1920/solo-leveling.png"
                title="Solo leveling"
                description="Solo Leveling é uma adaptação de uma webtoon sul-coreana de mesmo nome, idealizada por Chugong e lançada em 2016, que conquistou milhões de fãs ao redor do mundo. Ou seja, a obra já tinha muitos fãs antes mesmo de virar anime e a ansiedade por parte dos leitores para ver Solo Leveling nas telinhas era enorme"
                avaliation={2}
            />
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
