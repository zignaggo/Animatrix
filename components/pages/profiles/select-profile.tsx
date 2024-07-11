'use client'
import { TProfile } from '@/lib/supabase/profile'
import { Add } from './add'
import { ProfileAvatar } from './profile-avatar'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next-nprogress-bar'
export function SelectProfile({ profiles }: { profiles: TProfile[] }) {
    const router = useRouter()
    const saveProfile = (profile: TProfile) => {
        const duration = 2 * 60 * 60 * 1000
        const expiresAt = new Date(Date.now() + duration)
        setCookie('profile', profile, {
            expires: expiresAt,
            sameSite: 'lax',
        })
        router.replace('/animes')
    }
    return (
        <div className="w-full bg-black-950 flex items-center justify-center gap-6 p-10 flex-col">
            <h2 className="textsize-h2 text-purple-100 text-center sm:text-start">
                Quem está assistindo?
            </h2>
            <div className="flex flex-wrap gap-12 items-start justify-center">
                {profiles.map((profile) => (
                    <ProfileAvatar
                        key={profile.id}
                        name={profile.name}
                        image={profile.avatar_url}
                        onSubmit={() => saveProfile(profile)}
                    />
                ))}
                <Add onClick={() => router.push('/add-profile')} />
            </div>
        </div>
    )
}
