import { ANIME } from "@consumet/extensions"

export async function GET(request: Request) {
    const searchEngine = new ANIME.Anify()
    const response = await searchEngine.search('jujutsu')
    return Response.json(response)
}
