import React from 'react';
import {NavLink, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Monday from './Monday';
import Tuesday from './Tuesday';
import Wednesday from './Wednesday';
import Thursday from './Thursday';
import Friday from './Friday';
import'./NavBarStyle.css';

function NavBar() {
  return (
    <><nav className="navBar">
      <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/" >
            Homepage
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Monday" >
            Monday
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Tuesday" >
            Tuesday
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Wednesday" >
            Wednesday
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Thursday" >
            Thursday
          </NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/Friday" >
            Friday
          </NavLink>
        </li>
      </ul>
    </nav><div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Monday" element={<Monday />} />
          <Route path="/Tuesday" element={<Tuesday />} />
          <Route path="/Wednesday" element={<Wednesday />} />
          <Route path="/Thursday" element={<Thursday />} />
          <Route path="/Friday" element={<Friday />} />
        </Routes>
      </div></>
  );
}

export default NavBar;