import React from 'react'
import { NavLink } from 'react-router-dom'


function Navbar(props) {
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