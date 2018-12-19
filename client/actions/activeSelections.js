const setStory = payload => ({ 
  type: 'SET_STORY',
  payload: payload,
});

const setScene = payload => ({ 
  type: 'SET_SCENE',
  payload: payload,
});

const setBuilding = payload => ({ 
  type: 'SET_BLDG',
  payload: payload,
});

const setRoom = payload => ({ 
  type: 'SET_ROOM',
  payload: payload,
});

const setPhoto = payload => ({ 
  type: 'SET_PHOTO',
  payload: payload,
});

export { setStory, setScene, setBuilding, setRoom, setPhoto };