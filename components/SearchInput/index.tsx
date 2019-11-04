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
      setResponse([])
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
  const citiesArray = Array.from(selectedCities.values())
  // const cityNames = Array.from(selectedCities.values()).map(el => el.name)
  return (
    <Wrapper>
      <InputWrapper>
        {citiesArray.map(city => (
          <Tag
            onClick={() => {
              const newMap = new Map(selectedCities)
              newMap.delete(city.geonameid)
              setSelectedCities(newMap)
            }}
          >
            {city.name}
          </Tag>
        ))}
        <Input
          autoFocus
          onKeyDown={e => {
            const keysArrays = Array.from(selectedCities.keys())
            if (
              e.keyCode === 8 &&
              keysArrays.length &&
              cityName.trim() === ''
            ) {
              const latest = keysArrays[keysArrays.length - 1]
              const newMap = new Map(selectedCities)
              newMap.delete(latest)
              setSelectedCities(newMap)
            }
          }}
          onChange={e => {
            setCityName(e.target.value)
          }}
        />
      </InputWrapper>
      {cities.length !== 0 && (
        <Cities
          cities={cities}
          selectedCities={selectedCities}
          setSelectedCities={setSelectedCities}
        />
      )}
      <Result
        readOnly
        disabled
        value={citiesArray.map(city => city.name).join(',')}
      />
    </Wrapper>
  )
}
