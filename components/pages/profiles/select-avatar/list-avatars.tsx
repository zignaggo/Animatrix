import { RadioGroup } from '@/components/ui/radio-group'
import { RadioAvatarItem } from './avatar-radio'
import { TAvatar } from '@/lib/supabase/types'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { ComponentPropsWithoutRef } from 'react'
import useSWR from 'swr'
import { getClientAvatars } from '../mutations/cliente'
type ListAvatarsProps = {
    avatars?: TAvatar[]
} & ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
export function ListAvatars({ avatars, ...props }: ListAvatarsProps) {
    const { data } = useSWR(
        '/api/user/avatars',
        async () => await getClientAvatars(),
        { suspense: true }
    )
    return (
        <RadioGroup {...props}>
            <div className="flex items-center space-x-2">
                {data?.map((avatar) => (
                    <RadioAvatarItem
                        key={avatar.id}
                        value={JSON.stringify(avatar)}
                        id={`avatar-${avatar.id}`}
                        src={avatar.url}
                    />
                ))}
            </div>
        </RadioGroup>
    )
}
