import { ANIME } from "@consumet/extensions"
type Params = {
    anime: string
}
export async function GET(request: Request, context: { params: Params }) {
    const anime = context.params.anime
    const searchEngine = new ANIME.Anify()
    // Anify ( return more things )
    // Gogoanime
    // AnimeUnity
    // Zoro ( but retorn nothing )
    const response = await searchEngine.search(anime)
    return Response.json(response)
}
