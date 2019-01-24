import React from 'react'
import styled from 'styled-components'

import { ncesCategories } from 'utilities/colors'
import StackedColumns from 'components/scenes/svg/StackedColumns'

const BuildingInventoryColumnChart = ({buildings, height, width }) => {
  
  if (!buildings.length > 0) {
    return (<div />)
  }

  return (
    <div style={{width:'100%', height:'100%'}}>
      <StackedColumns
        data={buildings.filter(b => b.activeMulti).sort((b, a) => a.total_nsf - b.total_nsf)}
        colors={ncesCategories}
        height={height}
        width={width}
        margins={{top:20, right:25, bottom:110, left:50}}
        columns={{width:15, padding:5}}
      />
    </div>
  )
}

export default BuildingInventoryColumnChart

      // <FloatingYAxis 
      //   data={buildings}
        
      //   height={(height < 400)? 400: height}
      //   width={50}
      //   margins={{top:20, right:0, bottom:110, left:0}}
      // />