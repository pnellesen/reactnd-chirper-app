import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData, refreshData } from '../actions/shared'
import Dashboard from '../components/Home'
import NewChirpForm from '../components/NewChirpForm'
import Navbar from '../components/Navbar'
import LoadingBar from 'react-redux-loading'
import ViewChirp from './ViewChirp';


class App extends Component {
  componentDidMount() {
    console.log("componentDidMount. state?: ", this.state)
    this.props.dispatch(handleInitialData());
  }
  
  // probably won't need the state or 'changeView' function once we set up ReactRouter
  state = {
    visibleComp: 'dashboard',
    chirpId: null
  }

  changeView = (newView, chirpId = null) => {
    this.setState({visibleComp: newView, chirpId: chirpId})
  }

  render() {
    return (
      <div>
        <LoadingBar/>
        <Navbar changeView={this.changeView}/>
        {this.state.visibleComp === 'dashboard' && <Dashboard changeView={this.changeView}/>}
        {this.state.visibleComp === 'newchirp' && <NewChirpForm changeView={this.changeView} replyingTo={this.state.chirpId}/>}
        {this.state.visibleComp === 'viewsinglechirp' && <ViewChirp changeView={this.changeView} chirpId={this.state.chirpId}/>}
      </div>
    )
  }
}

export default connect()(App)