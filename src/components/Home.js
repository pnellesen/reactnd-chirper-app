// This is the "Dashboard" from the lesson. I'm being difficult and calling it something else ;)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timeline from './Timeline'

class Home extends Component {
  render() {
    return (
      <div>
        <h1 className={'center'}>All Chirps</h1>
        <Timeline chirpIds={this.props.chirpIds} currentUser={this.props.currentUser} changeView={this.props.changeView}/>
      </div>
    )
  }

}
const mapStateToProps = ( {chirps, currentUser}, { changeView } ) => ({
  chirpIds: Object.keys(chirps).sort(function(a,b){return chirps[b].timestamp - chirps[a].timestamp}),
  currentUser: currentUser,
  changeView: changeView
})
export default connect(mapStateToProps)(Home)