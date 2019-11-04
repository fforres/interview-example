import { NextApiRequest, NextApiResponse } from 'next'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  console.log(res)
  res.json(JSON.stringify({ hi: 'world' }))
}
