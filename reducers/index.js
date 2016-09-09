import pagination from './pagination'
import shots from './shots'
import listStyle from './listStyle'
import displayMode from './displayMode'
import selected from './selected'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pagination,
  shots,
  displayMode,
  listStyle,
  selected
})

export default rootReducer
