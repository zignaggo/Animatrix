'use client'
import { Add } from '@/components/pages/profiles/add'
import { ProfileAvatar } from '@/components/pages/profiles/profile-avatar'
import { Dispatch, forwardRef, SetStateAction } from 'react'

type ImageInputProps = {
    image?: string | null
    setImage?: Dispatch<SetStateAction<string | null>>
    onClick?: () => void
}

// export function ImageInput({ onClick, image, setImage }: ImageInputProps) {
//     return !image ? (
//         <Add
//             className={image ? 'hidden' : undefined}
//             type="button"
//             onClick={onClick}
//         />
//     ) : (
//         <ProfileAvatar
//             className={!image ? 'hidden' : undefined}
//             image={image}
//             hover={false}
//             edit
//             onEdit={onClick}
//             onDelete={() => setImage && setImage(null)}
//         />
//     )
// }


const ImageInput = forwardRef<HTMLButtonElement, ImageInputProps>(
    (
        {
            onClick, image, setImage,
            ...props
        },
        ref
    ) => {
        return !image ? (
            <Add
                className={image ? 'hidden' : undefined}
                type="button"
                onClick={onClick}
                ref={ref}
            />
        ) : (
            <ProfileAvatar
                className={!image ? 'hidden' : undefined}
                image={image}
                hover={false}
                edit
                onEdit={onClick}
                onDelete={() => setImage && setImage(null)}
            />
        )
    }
)
ImageInput.displayName = 'ImageInput'

export { ImageInput }