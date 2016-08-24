import pagination from './pagination'
import shots from './shots'
import { combineReducers } from 'redux'
const rootReducer = combineReducers({
  pagination,
  shots
})

export default rootReducer
