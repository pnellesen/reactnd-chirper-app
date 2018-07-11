import React, { Component } from 'react'
import { connect } from 'react-redux'
import  *  as helpers from '../utils/helpers'

class Chirp extends Component {

  render() {
    const chirpInfo = helpers.formatTweet(this.props.chirp, this.props.author, this.props.currentUser, this.props.parentChirp)
    const imgStyle = {
      background: 'url(' + chirpInfo.avatar + ')',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width:'50px'
    }
    
    console.log("formatTweet output: ", chirpInfo);
    
    return (

      <div className={'tweet'}>
        <div className={'tweet-info'}><div className={'avatar'} style={imgStyle}></div></div>
        <div className={'tweet-info'}>
          <div>
            <span>{chirpInfo.name}</span>
            <div>{helpers.formatDate(chirpInfo.timestamp)}</div>
            {chirpInfo.parent !== null && (<div>Replying to: @{chirpInfo.parent.author}</div>)}
            <p>{chirpInfo.text}</p>
            <div className={'tweet-icons'}>
             <span className={'tweet-icon'}>Reply</span>
             {chirpInfo.replies > 0 && (<span className='tweet-length'>{chirpInfo.replies}</span>)}
             <span className={'heart-button'}>Like</span>
             {chirpInfo.likes > 0 && (<span className='tweet-length'>{chirpInfo.likes}</span>)}
             
            </div>
          </div>  
        </div>
      </div>
    )
  }
}

const mapStateToProps = ( { chirps, authors, currentUser }, { chirpId } ) => ({
  chirp: chirps[chirpId],
  author: authors[chirps[chirpId].author],
  parentChirp: chirps[chirps[chirpId].replyingTo],
  currentUser: currentUser
})

export default connect(mapStateToProps)(Chirp)
