import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  *  as helpers from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import TiEdit from 'react-icons/lib/ti/edit'
import { handleToggleLikes } from '../actions/chirps';

class Chirp extends Component {
  toggleLike = () => {
    const toggleLikeInfo = {
      id: this.props.chirpId,
      hasLiked: this.props.chirpInfo.hasLiked,
      authedUser: this.props.currentUser
    }
    this.props.dispatch(handleToggleLikes(toggleLikeInfo));
  }

  render() {
    const { chirpInfo } = this.props;
    console.log("ChirpInfo: ", chirpInfo);
    if (chirpInfo === null) {
      return <p>This Chirp not found</p>
    }
    return (
      <div className={'tweet'}>
        <img src={chirpInfo.avatar} alt={`${chirpInfo.name}'s avatar`} className={'avatar'}/>
        <div className={'tweet-info'} style={{width:'100%'}}>
          <div>
            <span>{chirpInfo.name}</span>
            <div>{helpers.formatDate(chirpInfo.timestamp)}</div>
            {chirpInfo.parent !== null && (<Link to={`/reply/${chirpInfo.parent.id}`} className={'replying-to'}>Replying to: @{chirpInfo.parent.author}</Link>)}
            <p>{chirpInfo.text}</p>
            <div className={'tweet-icons'} style={{float:'left'}}>
              <Link to={`/reply/${chirpInfo.id}`}><TiArrowBackOutline className={'tweet-icon'}/></Link>
              <span>{chirpInfo.replies > 0 && chirpInfo.replies}</span>
              <button className={'heart-button'} onClick={(e) => this.toggleLike()}>
                {chirpInfo.hasLiked ? <TiHeartFullOutline color='#e0245e'  className={'tweet-icon'} /> : <TiHeartOutline className={'tweet-icon'}/>}
              </button>
              {chirpInfo.likes > 0 && (<span>{chirpInfo.likes}</span>)}
            </div>
            {chirpInfo.author === this.props.currentUser && <TiEdit className='tweet-icon' style={{float:'right'}}/>}
          </div>

        </div>
      </div>
    )
  }
}

const mapStateToProps = ( { chirps, authors, currentUser }, { chirpId } ) => {
  const chirp = chirps[chirpId];
  const parentChirp = chirp ? chirps[chirp.replyingTo] : null;
  return {
    chirpInfo: chirp ? {...helpers.formatTweet(chirp, authors[chirp.author], currentUser, parentChirp), author: chirp.author} : null,
    currentUser
  }
}

export default connect(mapStateToProps)(Chirp)
