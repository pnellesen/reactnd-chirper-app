import React, { Component } from 'react'

class ViewChirp extends Component {
  render() {
    return (
      <div>
        Display navbar, a single chirp, and then the timeline for this chirp here
      </div>
    )
  }
}

export default ViewChirp


/**
   // to get all replies to this chirp in Timeline:
  const mapStateToProps = ( {chirps, chirpId} ) => (
    {chirpIds: Object.keys(chirps).filter((chirpId) => chirps[chirpId].replies.includes(chirpId))}
  )
  export default connect(mapStateToProps)(ViewChirp)
*/
