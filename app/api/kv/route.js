export const runtime = 'edge'

export async function GET() {
    const getUser = await process.env.domain_structure_KV.get("user-name")
    return Response.json(getUser)
}