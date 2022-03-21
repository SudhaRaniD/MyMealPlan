import React from 'react';
import {NavLink, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Monday from './Monday';
import'./NavBarStyle.css';

function NavBar() {

  
  return (
    <><nav className="navBar">
      <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">
            Homepage
          </NavLink>
        </li>

        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Monday">
            Monday
          </NavLink>
        </li>
      </ul>
    </nav><div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Monday" element={<Monday />} />
        </Routes>
      </div></>
  );
}

export default NavBar;