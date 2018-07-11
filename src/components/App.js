import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from '../components/Home'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-redux-loading'


class App extends Component {
  componentDidMount() {
    console.log("componentDidMount. state?: ", this.props)
    this.props.dispatch(handleInitialData());
}


  render() {
    return (
      <div>
        <LoadingBar/>
        <Navbar/>
        <Dashboard/>
      </div>
    )
  }
}

export default connect()(App)