import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Chirp from './Chirp'
import NewChirpForm from './NewChirpForm'
import Timeline from './Timeline'

class ViewChirp extends Component {
  render() {
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

const mapStateToProps = ({ chirps }, { match }) => {

  const { chirpId } = match.params;

  const replies = chirps[chirpId] ? chirps[chirpId].replies.sort(function(a,b){return chirps[b].timestamp - chirps[a].timestamp}) : []
  const replyingTo = chirps[chirpId] && chirps[chirpId].replyingTo
  return {replies: [...replies], replyingTo: replyingTo, chirpId: chirpId}
}

export default withRouter(connect(mapStateToProps)(ViewChirp))
