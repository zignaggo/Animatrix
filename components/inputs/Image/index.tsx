'use client'
import { Add } from '@/components/pages/profiles/add'
import { ProfileAvatar } from '@/components/pages/profiles/profile-avatar'
import { forwardRef } from 'react'

type ImageInputProps = {
    image?: string | null
    setImage?: (value: string | null) => void
    onClick?: () => void
}

const ImageInput = forwardRef<HTMLButtonElement, ImageInputProps>(
    ({ onClick, image, setImage }, ref) => {
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
                noHover
                edit
                onEdit={onClick}
                onDelete={() => setImage && setImage(null)}
            />
        )
    }
)
ImageInput.displayName = 'ImageInput'

export { ImageInput }
