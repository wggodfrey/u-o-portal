import React from 'react';
import store from './store/index.js';

import Banner from './containers/Banner';
import Controller from './containers/Controller';
import Dashboard from './containers/Dashboard';

import { getSceneList } from './initializers/sceneList.js';
import { getStoryList } from './initializers/storyList.js';
import { getBuildingList } from './initializers/buildingList.js';

import './styles/app.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(getSceneList());
    store.dispatch(getStoryList());
    store.dispatch(getBuildingList());
  }

  render() {
    return (
      <div>
        <Banner />
        <Controller />
        <Dashboard />
      </div>
    );
  }
}

export default App;