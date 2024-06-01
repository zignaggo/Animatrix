import Image from "next/image";
import Empty from '@/public/EmptyAnime.svg'
export function SearchEmpty() {
    return (
        <div className="flex flex-col items-center justify-center flex-grow">
            <Image src={Empty} width={170} height={220} alt={'Card vazio'} />
            <h5 className="textsize-h4 text-center text-white mt-4">
                Parece que não tem nada por aqui
            </h5>
            <p className="max-w-[220px] text-center textsize-p1 text-gray-500">
                Procure por animes, filmes, doramas...
            </p>
        </div>
    )
}
