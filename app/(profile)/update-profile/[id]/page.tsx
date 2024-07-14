import { getProfile } from '@/components/pages/profiles/mutations/server'
import { UpdateProfileForm } from '@/components/pages/profiles/update-profile/form'
import { notFound } from 'next/navigation'

type UpdateProfileProps = {
    params: { id: number }
}
export default async function UpdateProfile({ params }: UpdateProfileProps) {
    const { id } = params
    const result = await getProfile(id)
    if (!result?.length) {
        return notFound()
    }
    const profile = result[0]
    return <UpdateProfileForm profile={profile}></UpdateProfileForm>
}
