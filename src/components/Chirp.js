import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  *  as helpers from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import { handleToggleLikes } from '../actions/chirps';

class Chirp extends Component {
  toggleLike = () => {

    const toggleLikeInfo = {
      id: this.props.chirpId,
      hasLiked: this.props.chirpInfo.hasLiked,
      authedUser: this.props.currentUser
    }
    console.log("toggle like - info to send: ",toggleLikeInfo);

    this.props.dispatch(handleToggleLikes(toggleLikeInfo));

  }

  goToParent = (evt, parentId) => {
    evt.preventDefault();
    console.log("Go to", parentId);
    //this.props.changeView('viewsinglechirp', parentId);
    
  }

  replyToChirp = (evt, chirpId) => {
    evt.preventDefault();
    console.log("Reply to ", chirpId);
    //this.props.changeView('newchirp', chirpId);
  }

  render() {

    const { chirpInfo , changeView, match } = this.props;
    if (chirpInfo === null) {
      return <p>This Chirp not found</p>
    }

    //console.log("Chirp changeView: ", changeView);

    return (

      <div className={'tweet'}>
        <img src={chirpInfo.avatar} alt={`${chirpInfo.name}'s avatar`} className={'avatar'}/>
        <div className={'tweet-info'}>
          <div>
            <span>{chirpInfo.name}</span>
            <div>{helpers.formatDate(chirpInfo.timestamp)}</div>
            {chirpInfo.parent !== null && (<Link to={`/reply/${chirpInfo.parent.id}`} className={'replying-to'}>Replying to: @{chirpInfo.parent.author}</Link>)}
            <p>{chirpInfo.text}</p>
            <div className={'tweet-icons'}>
             <Link to={`/reply/${chirpInfo.id}`}><TiArrowBackOutline className={'tweet-icon'}/></Link>
             <span>{chirpInfo.replies > 0 && chirpInfo.replies}</span>
            <button className={'heart-button'} onClick={(e) => this.toggleLike()}>
             {chirpInfo.hasLiked ? <TiHeartFullOutline color='#e0245e'  className={'tweet-icon'} /> : <TiHeartOutline className={'tweet-icon'}/>}
            </button>
             {chirpInfo.likes > 0 && (<span>{chirpInfo.likes}</span>)}

            </div>
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
    chirpInfo: chirp ? helpers.formatTweet(chirp, authors[chirp.author], currentUser, parentChirp) : null,
    currentUser
  }
}

export default connect(mapStateToProps)(Chirp)
