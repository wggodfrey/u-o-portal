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
            active: true,
            filters: {
              style: {
                position: 'absolute',
                top: '125px',
                left: '35px',
                width: '400px',
              },
              components: [
                {
                  parameter: 'buildings',
                  pickmode: 'dropdownmulti',
                },
              ],
            },
          },
          {
            title: 'Building Inventory',
            active: false,
            filters: {
              style: {
                position: 'absolute',
                top: '125px',
                right: '35px',
                width: '400px',
              },
              components: [
                {
                  parameter: 'buildings',
                  pickmode: 'dropdownmulti',
                },
              ],
            },
            legend: {
              style: {
                position: 'absolute',
                top: '180px',
                right: '35px',
                width: '400px',
              },
              components: [
                {
                  title: 'NCES Categories',
                  columns: [4,7,4],
                  items: [
                    {
                      label: 'Classroom',
                      hexfill: '#2C5985'
                    },
                    {
                      label: 'Class Laboratory',
                      hexfill: '#347EA1'
                    },
                    {
                      label:'Open Laboratory',
                      hexfill: '#4BA5BA'
                    },
                    {
                      label: 'Research Laboratory',
                      hexfill: '#89C8CC'
                    },
                    {
                      label: 'Office Facilities',
                      hexfill: '#EEDBBD'
                    },
                    {
                      label: 'Study Facilities',
                      hexfill: '#E8B777'
                    },
                    {
                      label: 'Special Use Facilities',
                      hexfill: '#D38C54'
                    },
                    {
                      label: 'General Use Facilities',
                      hexfill: '#BD603B'
                    },
                    {
                      label: 'Support Facilities',
                      hexfill: '#9F3632'
                    },
                    {
                      label: 'Health Care Facilities',
                      hexfill: '#BE89AC'
                    },
                    {
                      label: 'Residential Facilities',
                      hexfill: '#9A6A96'
                    },
                    {
                      label: 'Circulation',
                      hexfill: '#DCD4D0'
                    },
                    {
                      label: 'Building Service',
                      hexfill: '#B7AFAB'
                    },
                    {
                      label: 'Mechanical',
                      hexfill: '#948C88'
                    },
                    {
                      label: 'Unclassified Space',
                      hexfill: '#736967'
                    },
                  ],
                },
              ],
            },
          },
          {
            title: 'Room Inventory',
            active: false,
            filters: {
              style: {
                position: 'absolute',
                top: '125px',
                left: '10px',
                width: '400px',
              },
              components: [
                {
                  parameter: 'buildings',
                  pickmode: 'dropdownmulti',
                },
              ],
            },
          }
        ],
      },
      {
        title: 'Instruction',
        active: false,
        scenes: [
          {
            title: 'Campus Overview',
            active: false,
          },
          {
            title: 'Building Utilization',
            active: false,
          },
          {
            title: 'Room Utilization',
            active: false,
          },
          {
            title: 'Building Occupancy',
            active: false,
          },
          {
            title: 'Room Occupancy',
            active: false,
          },
        ],
      },
      {
        title: 'Capacity',
        active: false,
        scenes: [
          {
            title: 'Student-Hours vs Seat-Hours',
            active: false,
          },
          {
            title: 'Class-Size vs Room-Size',
            active: false,
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
      .then(bldgs => 
        bldgs.data.map(bldg => ({...bldg, 
          activeMulti: true,
          activeSingle: bldg.nm === 'BILGER HALL',
        }))
      )
      .then(bldgs => dispatch(initBuildings(bldgs)))
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