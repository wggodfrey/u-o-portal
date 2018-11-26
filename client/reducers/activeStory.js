import Redux from 'redux';

const activeStoryReducer = (state = 0, action) => {

  switch (action.type) {

    case 'SET_STORY':
      return action.payload;
    
    default:
      return state;
  
  }
}

export default activeStoryReducer;