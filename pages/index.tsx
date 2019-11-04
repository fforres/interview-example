import React from 'react'
import styled from 'styled-components'

const StyledSpan = styled.div`
  color: teal;
  padding: 1rem;
`

export default () => (
  <div>
    <div
      style={{
        padding: '1rem',
        background: 'lightgrey'
      }}
    >
      <span className="title">My Title</span>
      <StyledSpan>Some Styled span</StyledSpan>
    </div>
    <style jsx>{`
      .title {
        color: rebeccapurple;
        padding: 1rem;
      }
    `}</style>
  </div>
)
