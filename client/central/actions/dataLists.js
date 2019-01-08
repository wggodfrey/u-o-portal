import axios from 'axios'

const initStories = stories => ({
  type: 'INIT_STORIES',
  payload: stories
})

const initScenes = scenes => ({
  type: 'INIT_SCENES',
  payload: scenes
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
      },
      {
        title: 'Instruction',
        active: false,
      },
      {
        title: 'Capacity',
        active: false,
      },
      {
        title: 'Photos',
        active: false,
      },
    ]
    dispatch(initStories(stories))
  }
}

const getScenes = () => {
  return dispatch => {
    const scenes = [
      [
        {
          title: 'Campus Overview',
          filters: {
            multiBuildings:  true,
            singleBuildings: false,
          },
        },
        {
          title: 'Building Inventory',
          filters: {
            multiBuildings:  true,
            singleBuildings: false,
          },
        },
        {
          title: 'Room Inventory',
          filters: {
            multiBuildings:  false,
            singleBuildings: true,
          },
        }
      ],
      [
        {
          title: 'Campus Overview',
        },
        {
          title: 'Building Utilization',
        },
        {
          title: 'Room Utilization',
        },
        {
          title: 'Building Occupancy',
        },
        {
          title: 'Room Occupancy',
        },
      ],
      [
        'Student-Hours vs Seat-Hours',
        'Class-Size vs Room-Size',
      ],
      [
        null,
      ],
    ]
    dispatch(initScenes(scenes))
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

export { getStories, getScenes, getBuildings, getRooms, getPhotos }