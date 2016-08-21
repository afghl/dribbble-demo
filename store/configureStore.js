import { applyMiddleware, createStore } from 'redux'
import shotReducer from '../reducers/shots'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import api from '../middleware/api'

export default function configureStore() {
  const middleware = applyMiddleware(thunk, api, logger())

  return createStore(shotReducer, middleware)
}
