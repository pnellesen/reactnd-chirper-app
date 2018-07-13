import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chirp from './Chirp'
import NewChirpForm from './NewChirpForm'
import Timeline from './Timeline'

class ViewChirp extends Component {
  render() {
    //console.log("ViewChirp.  match?: ", this.props.match)
    return (
      <div className={'container'}>
        <Chirp chirpId={this.props.chirpId}/>
        <NewChirpForm replyingTo={this.props.chirpId}/>
        <div className={'center'}><h2>Replies to this Chirp</h2></div>
        <Timeline chirpIds={this.props.replies}/>
      </div>
    )
  }
}
//chirpIds: Object.keys(chirps).sort(function(a,b){return chirps[b].timestamp - chirps[a].timestamp}),
const mapStateToProps = ( {chirps}, {chirpId} ) => {

  const replies = chirps[chirpId] ? chirps[chirpId].replies.sort(function(a,b){return chirps[b].timestamp - chirps[a].timestamp}) : []
  const replyingTo = chirps[chirpId] && chirps[chirpId].replyingTo
  return {replies: [...replies], replyingTo: replyingTo}
}

export default connect(mapStateToProps)(ViewChirp)



/**
   // to get all replies to this chirp in Timeline:
  const mapStateToProps = ( {chirps, chirpId} ) => (
    {chirpIds: Object.keys(chirps).filter((chirpId) => chirps[chirpId].replies.includes(chirpId))}
  )
  export default connect(mapStateToProps)(ViewChirp)
*/
