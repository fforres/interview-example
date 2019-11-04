import { NextApiRequest, NextApiResponse } from 'next'
import Cities from '../../data/cities.json'

export default async (_: NextApiRequest, res: NextApiResponse) => {
  res.json(JSON.stringify(Cities))
}
