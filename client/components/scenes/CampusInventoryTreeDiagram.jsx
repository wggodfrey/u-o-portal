import React from 'react'
import styled from 'styled-components'

import { ncesCategories } from 'utilities/colors'
import TreeDiagram from 'components/scenes/svg/TreeDiagram'

const Wrapper = styled.div`
  width: calc(50% - 5px);
  margin: 0 0 0 5px;
  display: inline-block;
  height: 100%;
  overflow: hidden;
`

const CampusInventoryTreeDiagram = ({buildings, height, width }) => {
  
  if (!buildings.length > 0) {
    return (<div />)
  }

  const activeBuildings = buildings.filter(b => b.activeMulti)
  const leafData = {
    id: 'btree',
    name: 'btree',
    children: ncesCategories.map(c => ({
      id: `btree.${c.label_long}`,
      name: c.label_long,
      children: activeBuildings.map(b => ({
        id: `btree.${c.label_long}.${b.nm}`, 
        name: b.nm,
        size: +b[`${c.label_short}_nsf`],
      })).filter(d => d.size > 0)
    }))
  }

  return (
    <Wrapper>
      <TreeDiagram
        leafData={leafData}
        colors={ncesCategories}
        height={height}
        width={width}
      />
    </Wrapper>
  )
}

export default CampusInventoryTreeDiagram