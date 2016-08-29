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
    this.updateVisiting = this.updateVisiting.bind(this)
    this.updateSelected = this.updateSelected.bind(this)
    this.state = this.getState()
  }

  renderItem(item) {
    return (
      <li
        onClick={this.updateSelected(item.key)}
        key={item.key}
      >
        <a href="javascript:;">{item.name}</a>
      </li>
    )
  }

  render() {
    const { selectedItem, otherItems } = this.props

    return (
      <li>
        <a
          onClick={this.updateVisiting}
          className='selected-menu'
          href="javascript:;"
        >
          {selectedItem.name}
        </a>
        <List
          className={this.state.visiting ? 'sub' : 'sub hide'}
          renderItem={this.renderItem}
          items={otherItems}
        />
      </li>
    )
  }

  updateVisiting() {
    this.setState({visiting: !this.state.visiting})
  }

  updateSelected(key) {
    const { categoryType, updateCategory } = this.props
    return () => {
      this.setState({visiting: false})
      updateCategory(categoryType, key)
    }
  }
}

export default connect(
  mapStateToProps,
  { updateCategory }
)(MenuItem)
