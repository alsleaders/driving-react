import React, { Component } from 'react'
import HelloWorld from './components/HelloWorld'
import DrivingMap from './components/DrivingMap'
import Test2 from './components/Test2'

class App extends Component {
  render() {
    return (
      <>
        <HelloWorld />
        <Test2 />
        {/* <DrivingMap /> */}
      </>
    )
  }
}

export default App
