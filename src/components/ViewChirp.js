import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chirp from './Chirp'
import Timeline from './Timeline'

class ViewChirp extends Component {
  render() {
    console.log("ViewChirp. replies: ", this.props.replies)
    return (
      <div>
        <Chirp chirpId={this.props.chirpId}/>
        <div><h2>Replies to this Chirp</h2></div>
        <Timeline chirpIds={this.props.replies}/>
      </div>
    )
  }
}

const mapStateToProps = ( {chirps}, {chirpId} ) => (
  console.log("ViewChirp - mapStateToProps - replies: ", chirps[chirpId].replies),
  {replies: chirps[chirpId].replies}
)

export default connect(mapStateToProps)(ViewChirp)



/**
   // to get all replies to this chirp in Timeline:
  const mapStateToProps = ( {chirps, chirpId} ) => (
    {chirpIds: Object.keys(chirps).filter((chirpId) => chirps[chirpId].replies.includes(chirpId))}
  )
  export default connect(mapStateToProps)(ViewChirp)
*/
