'use client'
import { TProfile } from '@/lib/supabase/types'
import { Add } from '../add'
import { ProfileAvatar } from '../profile-avatar'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next-nprogress-bar'
import { Button } from '@/components/ui/button'
import { Edit2, X } from 'lucide-react'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
export function SelectProfile({ profiles }: { profiles: TProfile[] }) {
    const params = useSearchParams()
    const [edit, setEdit] = useState(!!params.get('edit') || false)
    const router = useRouter()
    const saveProfile = (profile: TProfile) => {
        if (edit) {
            return
        }
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
                        image={profile.avatar?.url}
                        edit={edit}
                        noDelete
                        onSubmit={() => saveProfile(profile)}
                        onEdit={() =>
                            router.replace(`/update-profile/${profile.id}`)
                        }
                    />
                ))}
                <Add onClick={() => router.replace('/add-profile')} />
            </div>
            <Button
                variant="secondary"
                className="mt-12"
                onClick={() => setEdit((value) => !value)}
            >
                {!edit ? <Edit2 size={16} /> : <X />}
                {!edit ? 'Gerenciar perfis' : 'Sair da Edição'}
            </Button>
        </div>
    )
}
