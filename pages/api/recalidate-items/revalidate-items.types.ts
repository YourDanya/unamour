import {NextApiRequest} from 'next'
import {NextApiResponse} from 'next'

export type Handler = (req: NextApiRequest, res: NextApiResponse) => void