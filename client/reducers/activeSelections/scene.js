import Redux from 'redux';

const sceneReducer = (state = 0, action) => {

  switch (action.type) {

    case 'SET_SCENE':
      return action.payload;
    
    default:
      return state;
  }
}

export default sceneReducer;