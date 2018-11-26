import Redux from 'redux';

const storyListReducer = (state = [], action) => {

  switch (action.type) {

    case 'INIT_STORIES':
      return action.payload;
    
    default:
      return state;
  
  }
}

export default storyListReducer;