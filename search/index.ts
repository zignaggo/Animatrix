import { ANIME } from "@consumet/extensions"

export async function getAnimesByCategory(category: string) {
    const searchEngine = new ANIME.Gogoanime()
    // Anify ( return more things )
    // Gogoanime
    // AnimeUnity
    // Zoro ( but retorn nothing )
    const response = await searchEngine.fetchGenreInfo(category)
    return response
}