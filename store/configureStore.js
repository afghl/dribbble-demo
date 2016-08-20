import { applyMiddleware, createStore } from 'redux'
import shotReducer from '../reducers/shots'
import logger from 'redux-logger'

export default function configureStore() {
  const middleware = applyMiddleware(logger())
  return createStore(shotReducer, middleware)
}
