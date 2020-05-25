import React from 'react'
import { Grid } from '@material-ui/core'
import styled from 'styled-components'

const Highlight = styled.span`
  color: lightgrey;
`

const Row = styled(Grid)`
  flex-basis: fit-content;
  white-space: no-wrap;
  text-align: left;
`

const GridWrap = styled(Grid)`
  padding: 15px;
`

function Results({ results = [] }) {

  return (
    <GridWrap container item xs={6} md={8} direction='column' spacing={2}>
      {results.map((result, idx) =>
        <Row item key={idx}>
          <span>{result.name}</span>
          <Highlight> {result.highlight}</Highlight>
        </Row>
      )}
    </GridWrap>
  )

}

export { Results }
