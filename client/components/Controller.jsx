import React from 'react';

import './../styles/controller.css';

const Controller = (props) => (
  props.sceneList.length && props.storyList.length
  ? <div id='controller'>
        {
          props.sceneList[props.activeStory].map((scene, i) => 
            <div 
              key = {`scene_${i}`} 
              className = {props.activeScene === i? 'scene active': 'scene inactive'}
              onClick = {() => { props.clickScene(i) }}
            > {scene} </div>
          )
        }
    </div>
  : <div></div> //...loading
);

export default Controller;