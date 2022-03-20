import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import Monday from './Components/Monday';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element = {<App/>} />
      <Route path ="/Monday" element = {<Monday />}/>  
    </Routes>
    </BrowserRouter>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

