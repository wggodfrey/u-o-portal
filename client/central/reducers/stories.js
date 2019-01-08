import Redux from 'redux';

const storyListReducer = (state = [], action) => {

  switch (action.type) {

    case 'INIT_STORIES':
      return action.payload;

    case 'SET_STORY':
      return state.map((story, i) => 
        action.payload === i
        ? {...story, active: true}
        : {...story, active: false}
      )

    case 'SET_SCENE':
      return state.map((story, i) =>
        story.active
        ? {...story, scenes: story.scenes.map((scene, j) => 
            action.payload === j
            ? {...scene, active: true}
            : {...scene, active: false}
          )}
        : story
      )
    
    default:
      return state;
  
  }
}

export default storyListReducer;