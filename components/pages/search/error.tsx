import Image from 'next/image'
import Error from '@/public/ErrorAnime.svg'
export function SearchError({ message }: { message: string }) {
    return (
        <div className="flex-grow flex flex-col items-center justify-center">
            <Image src={Error} width={170} height={220} alt={'Card error'} />
            <h3 className='mt-2'>Ocorreu um erro ao pesquisar</h3>
            <p className="textsize-p1 text-gray-400">{message}</p>
        </div>
    )
}
