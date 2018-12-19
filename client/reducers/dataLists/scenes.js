import Redux from 'redux';

const sceneListReducer = (state = [], action) => {
  
  switch (action.type) {

    case 'INIT_SCENES':
      return action.payload;
    
    default:
      return state;
  }
}

export default sceneListReducer;