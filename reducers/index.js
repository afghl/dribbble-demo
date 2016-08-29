import pagination from './pagination'
import shots from './shots'
import listStyle from './listStyle'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pagination,
  shots,
  listStyle
})

export default rootReducer
