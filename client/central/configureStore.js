import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer, initialState } from 'central/reducers'

export const configureStore = () => {
  
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk), 
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ),
  )

  return store
}