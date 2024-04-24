'use client'
import { TProfile } from '@/types/profile'
import { Add } from './add'
import { ProfileAvatar } from './profile-avatar'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next-nprogress-bar';
export function SelectProfile({ profiles }: { profiles: TProfile[] }) {
    const router = useRouter()
    const saveProfile = (profile: TProfile) => {
        const expiresAt = new Date(Date.now() + 2 * 60 * 60 * 1000)
        setCookie('profile', profile, {
            expires: expiresAt,
            sameSite: 'lax',
        })
        router.refresh()
    }
    return (
        <div className="position z-[100] absolute w-full h-full top-0 left-0 bg-black-950 flex items-center justify-center gap-6 p-10 flex-col">
            <h2 className="textsize-h2 text-purple-100 text-center sm:text-start">
                Quem está assistindo?
            </h2>
            <div className="flex flex-wrap gap-12 items-center justify-center">
                {profiles.map((profile) => (
                    <ProfileAvatar
                        key={profile.id}
                        name={profile.name}
                        onSubmit={() => saveProfile(profile)}
                    />
                ))}
                <Add />
            </div>
        </div>
    )
}