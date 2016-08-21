import { applyMiddleware, createStore } from 'redux'
import shotReducer from '../reducers/shots'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default function configureStore() {
  const middleware = applyMiddleware(logger(), thunk)

  return createStore(shotReducer, middleware)
}
