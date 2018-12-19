import { combineReducers } from 'redux';

import storiesReducer from './dataLists/stories';
import scenesReducer from './dataLists/scenes';
import buildingsReducer from './dataLists/buildings';

import storyReducer from './activeSelections/story';
import sceneReducer from './activeSelections/scene';
import buildingReducer from './activeSelections/building';

import navPanelReducer from './domDispositions/navPanel';

const rootReducer = combineReducers({
  scenes: scenesReducer,
  stories: storiesReducer,
  buildings: buildingsReducer,
  
  story: storyReducer,
  scene: sceneReducer,
  
  navPanel: navPanelReducer,
});

export default rootReducer;