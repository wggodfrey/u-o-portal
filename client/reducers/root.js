import { combineReducers } from 'redux';

//init reducers
import storyListReducer from './storyList';
import sceneListReducer from './sceneList';
import buildingListReducer from './buildingList';

//action reducers
import activeStoryReducer from './activeStory';
import activeSceneReducer from './activeScene';
import navOptsReducer from './navOpts';

const rootReducer = combineReducers({
  sceneList: sceneListReducer,
  storyList: storyListReducer,
  activeStory: activeStoryReducer,
  activeScene: activeSceneReducer,
  buildingList: buildingListReducer,
  navOpts: navOptsReducer,
});

export default rootReducer;