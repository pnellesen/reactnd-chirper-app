import React from 'react'

function Navbar(props) {
        return (
          <div className={'nav'}>
            <ul><li><button className={'btn active'}>Home</button></li><li><button className={'btn'}>New Chirp</button></li><li><button className={'btn'}>My Chirps</button></li></ul>
          </div>
        )
}
export default Navbar