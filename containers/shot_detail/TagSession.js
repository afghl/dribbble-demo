import React, { Component } from 'react'
import List from '../../components/List'

export default class ShotDetailTagSession extends Component {
  render() {
    const { tags } = this.props.shot

    return (
      <div className="tags-section">
        <h3 className="meta-head">Tags</h3>
        <List
          className="popular-tags"
          items={tags}
          renderItem={tag => (<li>{tag}</li>)}
        />
      </div>
    )
  }
}
