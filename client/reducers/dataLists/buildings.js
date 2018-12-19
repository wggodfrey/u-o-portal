import Redux from 'redux';

const buildingsReducer = (state = [], action) => {

  switch(action.type) {
    
    case 'INIT_BLDGS':
      return action.payload;
    
    default:
      return state;
  
  }
}

export default buildingsReducer;