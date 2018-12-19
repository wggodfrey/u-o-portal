import Redux from 'redux';

const roomReducer = (state = null, action) => {

  switch (action.type) {

    case 'SET_ROOM':
      return action.payload;
    
    default:
      return state;
  
  }
}

export default roomReducer;