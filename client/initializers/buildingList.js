import axios from 'axios';

const setBuildingList = payload => ({ 
  type: 'INIT_BUILDINGS',
  payload: payload,
});

const getBuildingList = () => {
  const thunk = dispatch => {
    axios.get('//localhost:1500/bldgs', (err, bldgs) => {
      dispatch(setBuildingList(bldgs));
    });
  };
  return thunk;
};

export { getBuildingList };