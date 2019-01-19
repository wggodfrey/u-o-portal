import Redux from 'redux';

const buildingListReducer = (state = [], action) => {

  switch(action.type) {
    
    case 'INIT_BLDGS':
      return action.payload
    
    case 'TOGG_BLDG_MULTI':
      return state.map(bldg =>
        bldg.id === action.payload
        ? {...bldg, activeMulti: !bldg.activeMulti}
        : bldg
      )

    case 'TOGG_BLDGS_ALL':
      console.log(action.payload)
      return state.map(bldg =>
        action.payload === 'ON'
        ? {...bldg, activeMulti: true}
        : {...bldg, activeMulti: false}
      )

    default:
      return state
  
  }
}

export default buildingListReducer;