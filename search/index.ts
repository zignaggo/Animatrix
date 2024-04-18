import { ANIME } from '@consumet/extensions'
const gogoEngine = new ANIME.Gogoanime()
const anifyEngine = new ANIME.Anify()
export async function getAnimesByCategory(category: string) {
    // Anify ( return more things )
    // Gogoanime
    // AnimeUnity
    // Zoro ( but retorn nothing )
    const response = await gogoEngine.fetchGenreInfo(category)
    console.log(response);
    return response
}
export async function getAnimesDetails(id: string) {
    try {
        const response = await anifyEngine.search(id)
        console.log(response)
        if(response.results.length === 0) {
            return false;
        }
        return response
    } catch (error) {
        return false
    }
}
