import { Add } from './add'
import { Profile } from './profile'

export function SelectProfile() {
    return (
        <div className="position z-[2000] absolute w-full h-full top-0 left-0 bg-black-950 flex items-center justify-center gap-6 p-10 flex-col">
            <h2 className="textsize-h2 text-purple-100 text-center sm:text-start">
                Quem está assistindo?
            </h2>
            <div className='flex flex-wrap gap-12 items-center justify-center'>
                <Profile name="Zig" />
                <Profile name="Alvacy" />
                <Profile name="Nicolas" />
                <Add />
            </div>
        </div>
    )
}
