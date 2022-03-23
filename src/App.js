import React from "react";
import Navbar from "./Components/NavBar";
import { BrowserRouter as Router} from 'react-router-dom';
import menu from './Components/menu.json';
import { handleChange } from "./handleChange";

function App() {
  handleChange(menu);
  return (
    <Router basename="/">
      <Navbar />
    </Router>   
  );
}

export default App;