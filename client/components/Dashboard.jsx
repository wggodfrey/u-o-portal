import React from 'react'
import styled from 'styled-components'

import withMeasure from 'hocs/withMeasure'
import Filters from 'containers/Filters'
import CampusInventoryPieMap from 'containers/scenes/CampusInventoryPieMap'
import CampusInventoryTreeDiagram from 'containers/scenes/CampusInventoryTreeDiagram'

const dimensions = ['width','height']
const MeasuredCampusInventoryTreeDiagram = withMeasure(dimensions)(CampusInventoryTreeDiagram)

const Wrapper = styled.div`
  width: calc(100% - 20px);
  height: calc(100vh - 120px);
  margin: 0 10px;
`

class Dashboard extends React.Component {

  constructor(props) {
    super(props)
    this.onWindowResize = e => this.forceUpdate()
  }

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResize.bind(this))
  }

  render() {

    const { stories } = this.props

    if (!stories.length) {
      return (<div></div>)
    }

    let story = stories.filter(s => s.active)[0]
    let scene = story.scenes.filter(s => s.active)[0]
    return (
      <div>
        {(() => {
          switch (scene.title) {
            case 'Campus Overview':
              return (<Wrapper>
                <CampusInventoryPieMap/><MeasuredCampusInventoryTreeDiagram/></Wrapper>)

            default:
              return (<div>ERROR</div>)
          }
        })()}
        <Filters scene={scene}/>
      </div>
    )
  }
}

export default Dashboard;
