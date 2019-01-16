import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  width: calc(100% - 10px);
  align-items: center;
  justify-content: center;
  padding: 0px 5px;
  margin: 10px 0px;
  font-family: 'Roboto Condensed';
  font-size: 13px;
  color: #525252;
`

const Scene = styled.div`
  display: inline-block;
  width: 150px;
  height: 17px;
  margin: 0 2px;
  padding: 15px 5px;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
  transition: 0.5s background;
  &.active {
    background: #a9a9a9;
  }
  &.inactive {
    background: #d3d3d3;
    &:hover {
      background: #525252;
    }
  }
`

const Storyboard = ({stories, clickScene}) => {

  if (!stories.length) {
    return (<div></div>)
  }

  let story = stories.filter(s => s.active)[0]
  return (
    <Wrapper>
      {
        story.scenes.map((scene, i) => 
          <Scene 
            key = {`scene_${i}`} 
            className = {scene.active? 'active': 'inactive'}
            onClick = {() => { clickScene(i)}}> 
          {scene.title} 
          </Scene>
        )
      }
    </Wrapper>
  )
}
export default Storyboard