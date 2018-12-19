import Redux from 'redux';

const photoReducer = (state = null, action) => {

  switch (action.type) {

    case 'SET_PHOTO':
      return action.payload;
    
    default:
      return state;
  
  }
}

export default photoReducer;