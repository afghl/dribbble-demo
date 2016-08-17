import React, { Component } from 'react'

export default class MenuItem extends Component {
  constructor(props) {
    super(props)

    this.state = this.getState()
  }

  getState() {
    return { visiting: false }
  }

  render() {
    const { item } = this.props

    return (
      <li>
        <a onClick={this._onMenuClick.bind(this)}>{item.name}</a>
        <ul className={ this.state.visiting ? 'sub' : 'sub hide' }>
          {
            item.subItems.map(item => {
              return (<li onClick={this._onItemClick.bind(this)}>{item.name}</li>)
            })
          }
        </ul>
      </li>
    )
  }

  _onMenuClick() {
    this.setState({visiting: !this.state.visiting});
  }

  _onItemClick() {
    // event bubble and send ajax.
  }
}
