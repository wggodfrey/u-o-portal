import React from 'react';

import './../styles/storyboard.css';

const Storyboard = props => (
  props.scenes.length && props.stories.length
  ? <div id='storyboard'>
      {
        props.scenes[props.story].map((scene, i) => 
          <div 
            key = {`scene_${i}`} 
            className = {props.scene === i? 'scene active': 'scene inactive'}
            onClick = {() => { props.clickScene(i)}}
          > {scene.title} </div>
        )
      }
    </div>
  : <div></div> //...loading
);

export default Storyboard;