import React from 'react'
import { CitiesWrapper, City } from './elements'

interface Props {
  cities: {
    geonameid: number
    name: string
    country: string
  }[]
  setSelectedCities: (arg1: any) => void
  selectedCities: Map<number, any>
}

export const Cities: React.FC<Props> = ({
  cities,
  setSelectedCities,
  selectedCities
}) => {
  return (
    <CitiesWrapper>
      {cities.map(city => {
        const { geonameid, name, country } = city
        return (
          <City
            key={geonameid}
            onClick={() => {
              setSelectedCities(
                new Map(selectedCities).set(geonameid, { ...city })
              )
            }}
          >
            {name} - <i>{country}</i>
          </City>
        )
      })}
    </CitiesWrapper>
  )
}
