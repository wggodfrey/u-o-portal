import React from 'react';
import store from './store/index.js';

import Panel from './containers/Panel';
import Banner from './containers/Banner';
import Storyboard from './containers/Storyboard';
import Filters from './containers/Filters';
// import Dashboard from './containers/Dashboard';

import { getStories, getScenes, getBuildings } from './actions/dataLists.js';

import './styles/app.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    store.dispatch(getScenes());
    store.dispatch(getStories());
    store.dispatch(getBuildings());
  }

  render() {
    return (
      <div>
        <Panel />
        <Banner />
        <Storyboard />
        <Filters />
      </div>
    );
  }
}

export default App;

// <Dashboard />