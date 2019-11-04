import { filter } from 'ramda'
import cities from './cities.json'

export const filterCitiesByKeyIfContains = (key: string, query: string) => {
  // we filter over all "cities"
  const filtered = filter(city => {
    // @ts-ignore
    // If no key is present, we return false
    const cityKey = city[key]
    if (!cityKey) {
      return false
    }
    // If there is a "key" for that city, we test it's value, against our "query", to see if the value matches
    const valueToTestAgainst = cityKey.toString()
    return new RegExp(query, 'gi').test(valueToTestAgainst)
  }, cities)
  return filtered
}
