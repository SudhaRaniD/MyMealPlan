import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navBar">
        <ul>
            <li>
            <NavLink className = {({isActive}) =>(isActive ? 'activeLink' : '')} to="/"> 
            HomePage
            </NavLink>
            </li>

            <li>
            <NavLink  className = {({isActive}) =>(isActive ? 'activeLink' : '')} to="/Components/Monday">
            Monday
            </NavLink>
            </li>
        </ul>
    </nav>
  );
}

export default NavBar;