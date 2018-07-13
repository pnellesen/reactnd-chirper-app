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

  render() {
    return (
        <BrowserRouter>
          <Fragment>
            <LoadingBar/>
            <div className={'container'}>
              <Navbar/>
              <Route exact path='/' render={() => (
                <Dashboard/>
              )}/>
              <Route path='/new' render={({ history }) => (
                <NewChirpForm history={history}/>
              )}/>
              <Route path={`/reply/:chirpId`} render={({ match }) => (
                <ViewChirp chirpId={match.params.chirpId}/>
              )}/>
            </div>
          </Fragment>
          
        </BrowserRouter>
      
    )
  }
}

export default connect()(App)