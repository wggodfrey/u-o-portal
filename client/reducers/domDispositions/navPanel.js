import Redux from 'redux';

const navPanelReducer = (state = false, action) => {

  switch (action.type) {

    case 'TOG_NAVPAN':
      return !state;
    
    default:
      return state;
  
  }
}

export default navPanelReducer;