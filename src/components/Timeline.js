import React from 'react'
import Chirp from './Chirp'


/**
 * We'll use this component to display the relevant chirps. If we're on the "My Tweets" page, we'll send a filtered chirpIds array in props for just those chirps written by the current user.
 * We can do a check for currentUser as a way to see if we've loaded our data. Might be better
 * to set up a flag in the store to do this though.
 */

function Timeline(props) {
        return (
            <div className={'container'}>
            {(props.chirpIds.length > 0 && props.currentUser !== null) ? props.chirpIds.map((chirpId) => <Chirp key={chirpId} chirpId={chirpId} changeView={props.changeView}/>) : <div className={'center'}>{props.currentUser === null ? 'Loading...' : 'None found'}</div>}
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