// This is the "Dashboard" from the lesson. I'm being difficult and calling it something else ;)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timeline from './Timeline'

class Home extends Component {
  render() {
    return (
      <div>
        <Timeline chirpIds={this.props.chirpIds} currentUser={this.props.currentUser}/>
      </div>
    )
  }

}
const mapStateToProps = ( {chirps, currentUser} ) => ({
  chirpIds: Object.keys(chirps).sort(function(a,b){return chirps[b].timestamp - chirps[a].timestamp}),
  currentUser: currentUser
})
export default connect(mapStateToProps)(Home)