import { ANIME } from "@consumet/extensions"

export async function getAnimesByCategory(category: string) {
    const searchEngine = new ANIME.Gogoanime()
    const response = await searchEngine.fetchGenreInfo(category)
    return response
}