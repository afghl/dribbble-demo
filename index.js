import 'babel-polyfill'
import './sass/main.scss'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import shotReducer from './reducers/shots'
import App from './components/App'

// TODO: store initialize state

const store = createStore(shotReducer, 0)
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
