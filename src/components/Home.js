// This is the "Dashboard" from the lesson. I'm being difficult and calling it something else ;)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Timeline from './Timeline'

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={'center'}>All Chirps</h1>
        <Timeline chirpIds={this.props.chirpIds} currentUser={this.props.currentUser}/>
      </div>
    )
  }

}
const mapStateToProps = ( {chirps, currentUser}, { match } ) => {
  const { path } = match
  const chirpIds = Object.keys(chirps).sort(function(a,b){return chirps[b].timestamp - chirps[a].timestamp})
  return {
    chirpIds: path !== '/my' ? chirpIds : chirpIds.filter((chirpId) => chirps[chirpId].author === currentUser),
    currentUser: currentUser,
  }
}

export default withRouter(connect(mapStateToProps)(Home))