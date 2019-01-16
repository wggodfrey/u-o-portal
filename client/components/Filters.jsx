import React from 'react'
import styled from 'styled-components'

import DropDownMulti from 'components/selects/DropDownMulti'

const Wrapper = styled.div`
  padding: 5px;
`

const Filters = ({ scene, buildings }) => (
  <Wrapper style={scene.filters.style}>
  {
    scene.filters.components.map((component, i) => {

      let data = (() => {
        switch (component.parameter) {
          case 'buildings':
            return buildings
          default:
            return 'hi'
        }
      })()

      let fProps = {
        key: `filt_${i}`,
        data,
        label: component.parameter,
      }

      return (
        (() => {
          switch (component.pickmode) {
            
            case 'dropdownmulti':
              return (
                <DropDownMulti {...fProps}/>
              )
            
            case 'dropdownsingle':
              return (<div>{'single ' + component.parameter}</div>)
            
            default:
              return (<div>n/a</div>)
          }
        })()
      )
    })
  }
  </Wrapper>
)

export default Filters


// {(() => {
//   switch (scene.filters.ncescats) {
//     case 'multi':
//       return (<div>multi</div>)
//     case 'single':
//       return (<div>single</div>)
//     default:
//       return (<div>n/a</div>)
//   }
// })()}