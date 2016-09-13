import pagination from './pagination'
import entities from './entities'
import listStyle from './listStyle'
import displayMode from './displayMode'
import selected from './selected'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  pagination,
  entities,
  displayMode,
  listStyle,
  selected
})

export default rootReducer
