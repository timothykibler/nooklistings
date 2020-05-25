import React from 'react'
import { Grid, Icon, Switch } from '@material-ui/core'
import styled from 'styled-components'

const FilterGrid = styled(Grid)`
  flex-basis: 100%;
  text-align: left;
  padding: 15px;
  max-height: 200px;
`

const FilterConfigItem = styled(Grid)`
  max-height: 100px !important;
`

function FilterConfig({ currentfilter: { Data: data = [] } }) {

  return (
    <FilterGrid container item spacing={1}>
      { data.map(({ Value: value }, idx) =>
        <FilterConfigItem item container key={idx} justify='flex-start' alignItems='baseline'>
          <Grid item md={6}>
            { value }
          </Grid>
          <Grid item md={2}>
            <Switch />
          </Grid>
        </FilterConfigItem>
      )}
    </FilterGrid>
  )

}

export { FilterConfig }
