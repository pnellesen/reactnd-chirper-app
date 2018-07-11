import React, { Component } from 'react'
import { connect } from 'react-redux'

class Chirp extends Component {

  render() {
    console.log("Chirp props:", this.props)
    return (
      <div className={'tweet-info'}>
        {JSON.stringify(this.props.chirp)}
      </div>
    )
  }
}
//export default Chirp

const mapStateToProps = ( { chirps }, { chirpId } ) => ({
  chirp: chirps[chirpId]
})

export default connect(mapStateToProps)(Chirp)
