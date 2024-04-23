export function getInitials(name: string) {
    const nameSplited = name.split(' ')
    const first = nameSplited[0][0]
    const second = nameSplited.length > 1 ? nameSplited[1][0] : nameSplited[0][1]
    return `${first}${second}`
}
