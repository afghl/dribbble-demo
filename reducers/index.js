import pagination from './pagination'
import entities from './entities'
import listStyle from './listStyle'
import pageStyle from './pageStyle'
import displayMode from './displayMode'
import selected from './selected'
import { combineReducers } from 'redux'

export default combineReducers({
  pagination,
  entities,
  displayMode,
  listStyle,
  selected,
  pageStyle
})
