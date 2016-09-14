import React, { Component, PropTypes } from 'react'
import Overlay from '../components/Overlay'
import { connect } from 'react-redux'
import { updateDisplayMode } from '../actions/shotDetail'

const mapStateToProps = (state, ownProps) => {
  const { pageStyle: { current } } = state
  const shouldShow = current == 'detail'
  return { shouldShow }
}

class ShotOverlay extends Component {
  constructor(props) {
    super(props)
    this.updateDisplay = this.updateDisplay.bind(this)
  }

  // disable scroll in body element.
  componentWillReceiveProps(nextProps) {
    const { shouldShow } = nextProps
    let body = document.getElementsByTagName('body')[0]

    body.style.overflow = shouldShow ? 'hidden' : 'auto'
  }


  updateDisplay() {
    this.props.updateDisplayMode('list')
  }

  render() {
    const { updateDisplay, props: { shouldShow, children } } = this

    return (
      <Overlay
        className={shouldShow ? 'overlay' : 'overlay hide'}
        onClose={updateDisplay}
        children={children}
      />
    )
  }
}

export default connect(
  mapStateToProps,
  { updateDisplayMode }
)(ShotOverlay)
