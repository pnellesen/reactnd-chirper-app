import React from 'react'

function Timeline(props) {
        return (
            <div className={'container center'}>
            <h1>Your timeline</h1>
            <ul>{props.chirpIds.length > 0 ? props.chirpIds.map((chirpId) => <li key={chirpId}>{chirpId}</li>) : 'Loading...'}</ul>
          </div>
        )
}
export default Timeline