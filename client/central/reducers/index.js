import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import stories from 'reducers/stories'
import scenes from 'reducers/scenes'
import buildings from 'reducers/buildings'

export const initialState = fromJS({
  scenes: [],
  stories: [],
  buildings: [],
})

export const rootReducer = combineReducers(
  {scenes, stories, buildings},
  initialState
)