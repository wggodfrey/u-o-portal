import axios from 'axios';

const setBuildingList = payload => ({ 
  type: 'INIT_BUILDINGS',
  payload: payload,
});

const getBuildingList = () => {
  return dispatch => {
    axios.get('//localhost:1500/bldgs')
      .then(bldgs => {
        dispatch(setBuildingList(bldgs.data))
      });
  };
};

export { getBuildingList };