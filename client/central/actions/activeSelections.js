const setStory = payload => ({ 
  type: 'SET_STORY',
  payload: payload,
});

const setScene = payload => ({ 
  type: 'SET_SCENE',
  payload: payload,
});

const toggleBuildingMulti = payload => ({ 
  type: 'TOGG_BLDG_MULTI',
  payload: payload,
});

const toggleBuildingsAll = payload => ({ 
  type: 'TOGG_BLDGS_ALL',
  payload: payload,
});

export { setStory, setScene, toggleBuildingMulti, toggleBuildingsAll };