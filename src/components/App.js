import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

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
    visibleComp: 'viewsinglechirp',
    chirpId: '6h5ims9iks66d4m7kqizmv'
  }

  changeView = (newView, chirpId = null) => {
    this.setState({visibleComp: newView, chirpId: chirpId})
  }

  render() {
    return (
      
        <BrowserRouter>
          <div>
            <LoadingBar/>
            <Navbar changeView={this.changeView}/>
            <Route exact path='/' render={() => (
              <Dashboard/>
            )}/>
            <Route path='/new' render={() => (
              <NewChirpForm/>
            )}/>
            <Route path={`/reply/:chirpId`} render={({ match }) => (
              <ViewChirp chirpId={match.params.chirpId}/>
            )}/>
          </div>
        </BrowserRouter>
      
    )
  }
}

export default connect()(App)