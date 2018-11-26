import Redux from 'redux';

const buildingReducer = (state = [], action) => {

  switch(action.type) {
    
    case 'INIT_BLDGS':
      return action.payload;
    
    default:
      return state;
  
  }
}

export default buildingReducer;