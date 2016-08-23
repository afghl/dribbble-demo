import categories from './categories'
import shots from './shots'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  categories,
  shots
})

export default rootReducer
