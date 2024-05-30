'use client'

import { useSearchParams } from 'next/navigation'

export default function SearchBar() {
    const searchParams = useSearchParams()
    const search = searchParams.get('query')
    return (
        <header className='flex gap-2 items-center'>
            <h2 className='textsize-h2'>Pesquisar {search ? ':' : ''}</h2> 
            <p className='textsize-h3 text-lemon-500'>{search}</p>
        </header>
    )
}
