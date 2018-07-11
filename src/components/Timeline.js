import React from 'react'
import Chirp from './Chirp'

// We'll use this component to display the relevant chirps. If we're on the "My Tweets" page, we'll send a filtered chirpIds array in props for just
// those chirps written by the current user.
function Timeline(props) {
        return (
            <div className={'container center'}>
            <h1>Your timeline</h1>
            <div>{props.chirpIds.length > 0 ? props.chirpIds.map((chirpId) => <Chirp key={chirpId} chirpId={chirpId}/>) : 'Loading...'}</div>
          </div>
        )
}
export default Timeline



/**
  // to get all chirps authored by currentUser:
  const mapStateToProps = ( {chirps, currentUser} ) => (
    {chirpIds: Object.keys(chirps).filter((chirpId) => chirps[chirpId].author === currentUser)}
  )
 */