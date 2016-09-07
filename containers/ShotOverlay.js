import React, { Component, PropTypes } from 'react'
import Overlay from '../components/Overlay'
import { connect } from 'react-redux'
import { updateDisplayMode } from '../actions/displayMode'

const mapStateToProps = (state, ownProps) => {
  const { displayMode } = state
  const shouldHide = displayMode != 'detail'
  return { shouldHide }
}

class ShotOverlay extends Component {
  constructor(props) {
    super(props)
    this.updateDisplay = this.updateDisplay.bind(this)
  }

  renderShotDetail() {
    // TODO

    return (
      <div>hhee</div>
    )
  }

  updateDisplay() {
    const { updateDisplayMode } = this.props
    updateDisplayMode('list')
  }

  render() {
    const { renderShotDetail, updateDisplay, props: { shouldHide } } = this

    return (
      <Overlay
        className={shouldHide ? 'overlay hide' : 'overlay'}
        renderChild={renderShotDetail}
        onClose={updateDisplay}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  { updateDisplayMode }
)(ShotOverlay)
