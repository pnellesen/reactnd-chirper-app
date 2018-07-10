// This is the "Dashboard" from the lesson. I'm being difficult and calling it something else ;)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Timeline from './Timeline'

class Home extends Component {
  render() {
    console.log("got chirp ids? ", this.props.chirpIds)
    return (
      <div>
        <div>Navbar here</div>
        <Timeline chirpIds={this.props.chirpIds}/>
      </div>
    )
  }
  
}
const mapStateToProps = ( {chirps} ) => ({
  chirpIds: Object.keys(chirps).sort(function(a,b){return chirps[b].timestamp - chirps[a].timestamp})
})
export default connect(mapStateToProps)(Home)