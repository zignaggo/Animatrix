import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { getAvatars } from '../mutations'

export async function ListAvatars() {
    const avatars = await getAvatars()
    return avatars.map((avatar) => (
        <Avatar key={avatar.id} className="h-16 w-16">
            <AvatarImage src={avatar.url} />
        </Avatar>
    ))
}
