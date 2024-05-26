export default function ErrorCode({
    params,
}: {
    params: {
        error: string
    }
}) {
    return (
        <section>
            <h1>{params.error}</h1>
        </section>
    )
}
