import { AddProfileForm } from '@/components/pages/profiles/add-profile/form'
import { ListAvatars } from '@/components/pages/profiles/select-avatar/list-avatars'
import { Skeleton } from '@/components/ui/skeleton'
import { Suspense } from 'react'
export default async function AddProfile() {
    return (
        <AddProfileForm>
            <Suspense
                fallback={
                    <div className='flex gap-2'>
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <Skeleton className="h-16 w-16 rounded-full" />
                        <Skeleton className="h-16 w-16 rounded-full" />
                    </div>
                }
            >
                <ListAvatars />
            </Suspense>
        </AddProfileForm>
    )
}
