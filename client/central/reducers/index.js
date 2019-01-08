import { combineReducers } from 'redux-immutable'
import { fromJS } from 'immutable'
import stories from 'reducers/stories'
import buildings from 'reducers/buildings'

export const initialState = fromJS({
  stories: [],
  buildings: [],
})

export const rootReducer = combineReducers(
  {stories, buildings},
  initialState
)