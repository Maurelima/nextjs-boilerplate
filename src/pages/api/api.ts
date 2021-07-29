// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
): Promise<VercelResponse | undefined> {
    try {
        response.status(200).json({ message: 'hello world' })
        return
    } catch (error) {
        throw new Error(error)
    }
}
