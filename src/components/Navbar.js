import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar(props) {
      const gotoNewChirp = (evt, newView) => {// This will be removed once we set up Router
        evt.preventDefault();
        props.changeView(newView);
      }
      return (
          <div className={'nav'}>
            <ul>
              <li><NavLink to={'/'} exact activeClassName='active'>Home</NavLink></li>
              <li><NavLink to={'/new'} activeClassName='active'>New chirp</NavLink></li>
              <li><NavLink to={'/my'} activeClassName='active'>My Chirps</NavLink></li>
            </ul>
          </div>
        )
}
export default Navbar