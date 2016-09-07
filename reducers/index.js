import pagination from './pagination'
import shots from './shots'
import listStyle from './listStyle'
import displayMode from './displayMode'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pagination,
  shots,
  displayMode,
  listStyle
})

export default rootReducer
