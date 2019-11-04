import { NextApiRequest, NextApiResponse } from 'next'
import { path } from 'ramda'
import { filterCitiesByKeyIfContains } from '../../../data/utils'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const cityName = path(['query', 'name'], req) as string
  if (!cityName) {
    res.json(JSON.stringify([]))
    return
  }
  const filteredCities = filterCitiesByKeyIfContains('name', cityName)
  res.json(JSON.stringify(filteredCities))
}
