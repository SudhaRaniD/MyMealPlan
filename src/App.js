import React from "react";
import Navbar from "./Components/NavBar";
import { BrowserRouter as Router} from 'react-router-dom';



function App() {
  return (
    <Router basename="/">
      <Navbar />
    </Router>
  );
}

export default App;