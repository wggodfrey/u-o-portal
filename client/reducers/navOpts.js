import Redux from 'redux';

const navOptsReducer = (state = false, action) => {

  switch (action.type) {

    case 'TOG_NAVOPTS':
      return !state;
    
    default:
      return state;
  
  }
}

export default navOptsReducer;