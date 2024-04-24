import { TProfile } from '@/types/profile'

export function getInitials(name: string) {
    const nameSplited = name.split(' ')
    const first = nameSplited[0][0]
    const second =
        nameSplited.length > 1 ? nameSplited[1][0] : nameSplited[0][1]
    return `${first}${second}`
}

export function getProfiles(): Promise<TProfile[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const profile: TProfile[] = [
                {
                    id: 1,
                    name: 'Zig',
                    language: 'pt',
                },
                {
                    id: 2,
                    name: 'Nicolas',
                    language: 'pt',
                },
                {
                    id: 3,
                    name: 'Alvacy',
                    language: 'pt',
                },
            ]
            resolve(profile)
        }, 1000) // 1 second delay
    })
}
