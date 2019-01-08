import Redux from 'redux';

const buildingReducer = (state = null, action) => {

  switch (action.type) {

    case 'SET_BLDG':
      return action.payload;
    
    default:
      return state;
  
  }
}

export default buildingReducer;