import React from 'react'
import styled from 'styled-components'

import { ncesCategories } from 'utilities/colors'
import TreeDiagram from 'components/scenes/svg/TreeDiagram'

const CampusInventoryTreeDiagram = ({buildings, height, width }) => {
  
  if (!buildings.length > 0) {
    return (<div />)
  }

  const leafData = {
    id: 'tree',
    name: 'tree',
    children: ncesCategories.map(c => ({
      id: `tree.${c.label_long}`,
      name: c.label_long,
      children: buildings.map(b => ({
        id: `tree.${c.label_long}.${b.nm}`, 
        name: b.nm,
        size: b.activeMulti? +b[`${c.label_short}_nsf`]: 0,
      }))
    }))
  }

  return (
    <div style={{width:'calc(100% - 5px)', height:'100%', margin: '0 0 0 5px'}}>
      <TreeDiagram
        data={leafData}
        colors={ncesCategories}
        width={width}
        height={height}
        margins={{top:0, right:0, bottom:0, left:0}}
      />
    </div>
  )
}

export default CampusInventoryTreeDiagram