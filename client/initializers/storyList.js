const setStoryList = stories => ({
  type: 'INIT_STORIES',
  payload: stories
});

const getStoryList = () => {
  const thunk = dispatch => {
    let stories = [
      'Facilities',
      'Instruction',
      'Capacity',
      'Photos',
    ];
    dispatch(setStoryList(stories));
  }
  return thunk;
}

export { getStoryList };