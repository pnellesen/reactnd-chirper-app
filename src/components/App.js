import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData, refreshData } from '../actions/shared'
import Dashboard from '../components/Home'
import NewChirpForm from '../components/NewChirpForm'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-redux-loading'


class App extends Component {
  componentDidMount() {
    console.log("componentDidMount. state?: ", this.state)
    this.props.dispatch(handleInitialData());
  }
  
  // probably won't need the state or 'changeView' function once we set up ReactRouter
  state = {
    visibleComp: 'dashboard'
  }

  changeView = (newView) => {
    this.setState({visibleComp: newView})
  }

  render() {
    return (
      <div>
        <LoadingBar/>
        <Navbar changeView={this.changeView}/>
        {this.state.visibleComp === 'dashboard' && <Dashboard/>}
        {this.state.visibleComp === 'newchirp' && <NewChirpForm/>}
      </div>
    )
  }
}

export default connect()(App)