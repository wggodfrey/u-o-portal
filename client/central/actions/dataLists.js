import axios from 'axios'

const initStories = stories => ({
  type: 'INIT_STORIES',
  payload: stories
})

const initBuildings = payload => ({ 
  type: 'INIT_BLDGS',
  payload: payload,
})

const initRooms = payload => ({ 
  type: 'INIT_ROOMS',
  payload: payload,
})

const initPhotos = payload => ({ 
  type: 'INIT_PHOTOS',
  payload: payload,
})

const getStories = () => {
  return dispatch => {
    const stories = [
      {
        title: 'Facilities',
        active: true,
        scenes: [
          {
            title: 'Campus Overview',
            active: false,
            filters: {
              multiBuildings:  true,
              singleBuildings: false,
            },
          },
          {
            active: false,
            title: 'Building Inventory',
            filters: {
              multiBuildings:  true,
              singleBuildings: false,
            },
          },
          {
            active: false,
            title: 'Room Inventory',
            filters: {
              multiBuildings:  false,
              singleBuildings: true,
            },
          }
        ],
      },
      {
        title: 'Instruction',
        active: false,
        scenes: [
          {
            active: false,
            title: 'Campus Overview',
          },
          {
            active: false,
            title: 'Building Utilization',
          },
          {
            active: false,
            title: 'Room Utilization',
          },
          {
            active: false,
            title: 'Building Occupancy',
          },
          {
            active: false,
            title: 'Room Occupancy',
          },
        ],
      },
      {
        title: 'Capacity',
        active: false,
        scenes: [
          {
            active: false,
            title: 'Student-Hours vs Seat-Hours',
          },
          {
            active: false,
            title: 'Class-Size vs Room-Size',
          },
        ],
      },
      {
        title: 'Photos',
        active: false,
        scenes: [
          null,
        ],
      },
    ]
    dispatch(initStories(stories))
  }
}

const getBuildings = () => {
  return dispatch => {
    axios.get('/buildings')
      .then(bldgs => dispatch(initBuildings(bldgs.data)))
  }
}

const getRooms = (building_id) => {
  return dispatch => {
    axios.get(`/rooms/${building_id}`)
      .then(rooms => dispatch(initRooms(rooms.data)))
  }
}

const getPhotos = (building_id, room_id) => {
  return dispatch => {
    axios.get(`/photos/${building_id}/${room_id || 'ALL'}`)
      .then(photos => dispatch(initPhotos(photos.data)))
  }
}

export { getStories, getBuildings, getRooms, getPhotos }