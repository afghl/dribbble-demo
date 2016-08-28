import React, { Component } from 'react'
import List from '../components/List'
import { connect } from 'react-redux'
import find from 'lodash/find'
import without from 'lodash/without'
import { updateCategory } from '../actions/category'

const mapStateToProps = (state, ownProps) => {
  const { categories } = state.pagination
  const { categoryType, items } = ownProps
  const selectedKey = categories[categoryType]
  const selectedItem = find(items, i => i.key == selectedKey)

  return {
    selectedItem,
    otherItems: without(items, selectedItem)
  }
}

class MenuItem extends Component {
  getState() {
    return { visiting: false }
  }

  constructor(props) {
    super(props)
    this.renderItem = this.renderItem.bind(this)
    this.state = this.getState()
  }

  renderItem(item) {
    const { updateCategory, categoryType } = this.props
    
    return (
      <li
        onClick={updateCategory(categoryType, item.key)}
        key={item.key}
      >
        {item.name}
      </li>
    )
  }

  render() {
    const { selectedItem, otherItems } = this.props

    return (
      <li>
        <a onClick={this.onMenuClick.bind(this)}>{selectedItem.name}</a>
        <List
          className={ this.state.visiting ? 'sub' : 'sub hide' }
          renderItem={this.renderItem}
          items={otherItems}
        />
      </li>
    )
  }

  onMenuClick() {
    this.setState({visiting: !this.state.visiting})
  }
}

export default connect(
  mapStateToProps,
  { updateCategory }
)(MenuItem)
