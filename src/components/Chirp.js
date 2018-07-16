import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import  *  as helpers from '../utils/helpers'
import TiArrowBackOutline from 'react-icons/lib/ti/arrow-back-outline'
import TiHeartOutline from 'react-icons/lib/ti/heart-outline'
import TiHeartFullOutline from 'react-icons/lib/ti/heart-full-outline'
import TiEdit from 'react-icons/lib/ti/edit'
import { handleToggleLikes, handleEditChirp } from '../actions/chirps';
import NewChirpForm from './NewChirpForm'

class Chirp extends Component {
  state = {
    chirpEditText: this.props.chirpInfo.text,
    showEdit: false
  }

  componentDidMount() {

  }
  
  _onChange = (evt) => (
    this.setState({
      chirpEditText: evt.target.value 
    })
  )
  toggleLike = () => {
    const toggleLikeInfo = {
      id: this.props.chirpId,
      hasLiked: this.props.chirpInfo.hasLiked,
      authedUser: this.props.currentUser
    }
    this.props.dispatch(handleToggleLikes(toggleLikeInfo));
  }
  toggleEdit = () => {
    this.setState({showEdit: !this.state.showEdit})
  }
  handleEdit = (evt) => {
    evt.preventDefault();
    console.log("edit chirp: ", this.state.chirpEditText);
    this.props.dispatch(handleEditChirp({
      id: this.props.chirpId,
      text: this.state.chirpEditText
    }))
    this.toggleEdit();
  }

  render() {
    const { chirpInfo } = this.props;
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
            <p style={{display: this.state.showEdit ? 'none' : 'block'}}>{this.state.chirpEditText}</p>
            <div className={'container'} style={{display: this.state.showEdit ? 'block' : 'none'}}>
              <form className={'new-tweet'} onSubmit={(e) => this.handleEdit(e)} >
                <textarea className={'textarea'} placeholder={"What's happening?"} value={this.state.chirpEditText} onChange={this._onChange} maxLength={280}/>
                <button type={'submit'} className={'btn'} >Submit</button>
              </form>
            </div>
            <div className={'tweet-icons'} style={{float:'left'}}>
              <Link to={`/reply/${chirpInfo.id}`}><TiArrowBackOutline className={'tweet-icon'}/></Link>
              <span>{chirpInfo.replies > 0 && chirpInfo.replies}</span>
              <button className={'heart-button'} onClick={(e) => this.toggleLike()}>
                {chirpInfo.hasLiked ? <TiHeartFullOutline color='#e0245e'  className={'tweet-icon'} /> : <TiHeartOutline className={'tweet-icon'}/>}
              </button>
              {chirpInfo.likes > 0 && (<span>{chirpInfo.likes}</span>)}
            </div>
            {chirpInfo.author === this.props.currentUser && <TiEdit onClick={(e) => this.toggleEdit()} className='tweet-icon' style={{float:'right'}}/>}
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
