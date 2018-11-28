const setSceneList = scenes => ({
  type: 'INIT_SCENES',
  payload: scenes
});

const getSceneList = () => {
  const thunk = dispatch => {
    let scenes = [
      [
        'Campus Overview',
        'Building Inventory',
        'Room Inventory', 
      ],
      [
        'Campus Overview',
        'Building Utilization',
        'Room Utilization',
        'Building Occupancy',
        'Room Occupancy',
      ],
      [
        'Student-Hours vs Seat-Hours',
        'Class-Size vs Room-Size',
      ],
      [
        null,
      ],
    ]
    dispatch(setSceneList(scenes));
  }
  return thunk;
}

export { getSceneList };