import Redux from 'redux';

const navOptsReducer = (state = false, action) => {

  switch (action.type) {

    case 'TOG_NAVOPTS':
      console.log(state)
      return !state;
    
    default:
      return state;
  
  }
}

export default navOptsReducer;