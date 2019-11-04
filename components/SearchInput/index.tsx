import React, { useEffect, useState } from 'react'

import { Input, Wrapper, Cities, City } from './elements'

interface Props {
  onSelectedOption: (arg1: any) => void
}

const useFetchCities = (cityName: string): { name: string }[] => {
  const [response, setResponse] = useState([])
  useEffect(() => {
    // prevent first render run
    if (cityName.trim() === '') {
      return
    }
    fetch(`http://localhost:3000/api/city?name=${cityName}`)
      .then(res => res.json())
      .then(json => setResponse(json))
  }, [cityName])
  return response
}

export const SearchInput: React.FC<Props> = () => {
  const [cityName, setCityName] = useState('')
  const cities = useFetchCities(cityName)
  return (
    <Wrapper>
      <Input
        onChange={e => {
          setCityName(e.target.value)
        }}
      />
      <Cities>
        {cities.map(city => {
          return <City>{city.name}</City>
        })}
      </Cities>
    </Wrapper>
  )
}
