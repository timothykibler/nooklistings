import React, { useEffect, useState } from 'react'
import { Grid, Container, Paper } from '@material-ui/core'
import styled from 'styled-components'

const FilterGrid = styled(Grid)`
  flex-basis: 200px;
  text-align: left;
  padding: 15px;
`

const FilterItemWrapper = styled(Grid)`
  cursor: pointer;
  user-select: none;
`

function Filters({ filternames = [], onClick = () => {} }) {

  return (
    <FilterGrid container xs={3} md={3} item direction='column' spacing={2}>
      { filternames.map((name, idx) =>
        <FilterItemWrapper item onClick={() => onClick(name)} key={idx}>
          {name}
        </FilterItemWrapper>)
      }
    </FilterGrid>
  )
}

export { Filters }
