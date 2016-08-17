import React, { Component } from 'react'
import Header from '../components/Header'
import ShotMenu from './ShotMenu'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <ShotMenu />
      </div>
    )
  }
}
