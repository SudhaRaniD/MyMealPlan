import React from 'react';
import {NavLink, Routes, Route} from 'react-router-dom';

function NavBar() {

  const Home = () => <div>Home</div>;
  const Monday = () => <div>Monday</div>;

  return (
    <><nav className="navBar">
      <ul>
        <li>
        <NavLink className={({ isActive }) => (isActive ? 'active' : 'inactive')} to="/">
            HomePage
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