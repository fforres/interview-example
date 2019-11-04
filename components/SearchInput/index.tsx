import React, { useEffect, useState } from 'react'
import { Cities } from '../Cities'
import { Input, Wrapper, Result, InputWrapper, Tag } from './elements'

interface Props {
  onSelectedOption: (arg1: any) => void
}

const useFetchCities = (
  cityName: string
): { name: string; country: string; geonameid: number }[] => {
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
  const [selectedCities, setSelectedCities] = useState<Map<number, any>>(
    new Map()
  )
  const cities = useFetchCities(cityName)
  const cityNames = Array.from(selectedCities.values()).map(el => el.name)
  return (
    <Wrapper>
      <InputWrapper>
        {cityNames.map(name => (
          <Tag>{name}</Tag>
        ))}
        <Input
          autoFocus
          onChange={e => {
            setCityName(e.target.value)
          }}
        />
      </InputWrapper>
      <Cities
        cities={cities}
        selectedCities={selectedCities}
        setSelectedCities={setSelectedCities}
      />
      <Result
        readOnly
        disabled
        value={Array.from(selectedCities.values())
          .map(city => city.name)
          .join(',')}
      />
    </Wrapper>
  )
}
