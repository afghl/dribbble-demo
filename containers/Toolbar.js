import React, { Component } from 'react'
import ShotMenu from './ShotMenu'
import ScreenshotAction from './ScreenshotAction'

export default class Toolbar extends Component {
  render() {
    return (
      <div>
        <ShotMenu />
        <ScreenshotAction />
      </div>
    )
  }
}
