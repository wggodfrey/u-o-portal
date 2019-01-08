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
    
    default:
      return state;
  
  }
}

export default storyListReducer;