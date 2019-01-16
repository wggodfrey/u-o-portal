import React from 'react'
import styled from 'styled-components'

import Filters from 'containers/Filters'
import PieMap from 'containers/scenes/PieMap'

const Wrapper = styled.div`
  width: calc(100% - 20px);
  height: calc(100vh - 120px);
  margin: 0px 10px;
`

const Dashboard = ({stories}) => {
  if (!stories.length) {
    return (<div></div>)
  }

  let story = stories.filter(s => s.active)[0]
  let scene = story.scenes.filter(s => s.active)[0]
  return (
    <Wrapper>
      {(() => {
        switch (scene.title) {
          case 'Campus Overview':
            return (<PieMap/>)

          default:
            return (<div>ERROR</div>)
        }
      })()}
      <Filters scene={scene}/>
    </Wrapper>
  )
}

export default Dashboard;
