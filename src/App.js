import React from 'react';
import {NavLink} from 'react-router-dom';
// import React, { useState } from "react";
// import NavBar from "./Components/NavBar";
// import Input from "./Components/Input";
// import Monday from "./Components/Monday";



function App() {
 
    return (
      <div className = "content">
      <nav className="homePageNav">
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
            to="/"
          >
           HomePage
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? 'activeLink' : '')}
            to="/Components/Monday"
          >
           Monday
          </NavLink>
        </li>
       
      </ul>
    </nav>
    </div>

 
  );
}

export default App;