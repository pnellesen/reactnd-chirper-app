import React from 'react'



function Navbar(props) {
      const gotoNewChirp = (evt, newView) => {// This will be removed once we set up Router
        evt.preventDefault();
        props.changeView(newView);
      }
      return (
          <div className={'nav'}>
            <ul><li><button className={'btn active'} onClick={(e) => gotoNewChirp(e, 'dashboard')}>Home</button></li><li><button className={'btn'} onClick={(e) => gotoNewChirp(e, 'newchirp')}>New Chirp</button></li><li><button className={'btn'}>My Chirps</button></li></ul>
          </div>
        )
}
export default Navbar