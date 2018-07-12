import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chirp from './Chirp'
import NewChirpForm from './NewChirpForm'
import Timeline from './Timeline'

class ViewChirp extends Component {
  render() {
    console.log("ViewChirp. replies: ", this.props.replies)
    return (
      <div className={'container'}>
        <Chirp chirpId={this.props.chirpId}/>
        <NewChirpForm replyingTo={this.props.replyingTo}/>
        <div className={'center'}><h2>Replies to this Chirp</h2></div>
        <Timeline chirpIds={this.props.replies}/>
      </div>
    )
  }
}

const mapStateToProps = ( {chirps}, {chirpId} ) => {
  const replies = chirps[chirpId] ? chirps[chirpId].replies : []
  const replyingTo = chirps[chirpId] && chirps[chirpId].replyingTo
  console.log("ViewChirp - mapStateToProps - replyingTo: ", replyingTo)
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
