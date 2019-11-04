import React, { useState } from 'react'
import styled from 'styled-components'
import { SearchInput } from '../components/SearchInput'

export default () => {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([])
  return (
    <div>
      <SearchInput
        onSelectedOption={(option: any) => {
          setSelectedOptions([...selectedOptions, option])
        }}
      />
    </div>
  )
}
