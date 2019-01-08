import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'central/configureStore'

import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import Banner from 'containers/Banner'
import Storyboard from 'containers/Storyboard'
// import Filters from './Filters';
// import Dashboard from './containers/Dashboard';

import { getStories, getScenes, getBuildings } from 'actions/dataLists'


const GlobalStyle = createGlobalStyle`
  body {
    min-width: 600px;
    margin: 0;
    overflow: hidden;
    background: #efefef;
  }
  button {
    outline: none !important;
    outline-offset: none !important;
    border: none !important;
  }
`

const store = configureStore()
store.dispatch(getScenes())
store.dispatch(getStories())
store.dispatch(getBuildings())

const App = () => (
  <Provider store={store}>
    <div>
      <GlobalStyle/>
      <Banner/>
      <Storyboard />
    </div>
  </Provider>
)

export default App


// <div>
//   <Banner />
//   
//   <Filters />
// </div>