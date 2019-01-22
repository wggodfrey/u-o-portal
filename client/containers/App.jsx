import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from 'central/configureStore'

import styled, {ThemeProvider, createGlobalStyle} from 'styled-components'
import Banner from 'containers/Banner'
import Storyboard from 'containers/Storyboard'
import Dashboard from 'containers/Dashboard'

import { getStories, getBuildings } from 'central/actions/dataLists'

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 920px;
    margin: 0;
    overflow: hidden;
    background: #ffffff;
  }
  button {
    outline: none !important;
    outline-offset: none !important;
    border: none !important;
  }
  input {
    border: solid 1px #f2f2f2;
    outline: none !important;
    outline-offset: none !important;
  }
  ul {
    list-style: none outside none;
    padding: 0;
    margin: 0;
  }
`

const store = configureStore()
store.dispatch(getStories())
store.dispatch(getBuildings())

const App = () => (
  <Provider store={store}>
    <div>
      <GlobalStyle />
      <Banner/>
      <Storyboard />
      <Dashboard />
    </div>
  </Provider>
)

export default App
