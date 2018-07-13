import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleNewChirp } from '../actions/chirps';

class NewChirpForm extends Component {
  state = {
    chirpText: ''
  }

  _onChange = (evt) => {
    this.setState({chirpText: evt.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.dispatch(handleNewChirp({
      text: this.state.chirpText,
      author:this.props.currentUser,
      replyingTo: this.props.replyingTo
    }))
    .then(() => this.props.history !== null && this.props.history.push('/'))
  }
  
  render() {
    const { chirpText } = this.state
    const textRemaining = 280 - chirpText.length
    return (
      <div className={'container'}>
        <h3 className={'center'}>Compose {this.props.replyingTo ? 'reply' : 'new Chirp'}</h3>
        <form className={'new-tweet'} onSubmit={(e) => this.handleSubmit(e)}>
          <textarea className={'textarea'} placeholder={"What's happening?"} value={chirpText} onChange={this._onChange} maxLength={280}/>
          <div className={textRemaining < 100 ? 'tweet-length' : 'none'}>Characters remaining: {textRemaining}</div>
          <button type={'submit'} className={'btn'} disabled={chirpText.length === 0}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ( { currentUser }, { replyingTo = null, history = null } ) => {
  return {
    currentUser: currentUser,
    replyingTo: replyingTo, 
    history: history
  }
}


export default connect(mapStateToProps)(NewChirpForm)