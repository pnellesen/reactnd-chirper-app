import React from 'react'

function Timeline(props) {
        return (
            <div>
            <h1>Your timeline</h1>
            <ul>{props.chirpIds.map((chirpId) => <li key={chirpId}>{chirpId}</li>)}</ul>
          </div>
        )
}
export default Timeline