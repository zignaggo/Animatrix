type Params = {
    anime?: string
}

export async function GET(request: Request, context: { params: Params }) {
    const anime = context.params?.anime // '1'
    return Response.json(anime || 'nada aqui')
}
