import Redux from 'redux';

const buildingListReducer = (state = [], action) => {

  switch(action.type) {
    
    case 'INIT_BLDGS':
      return action.payload;
    
    default:
      return state;
  
  }
}

export default buildingListReducer;