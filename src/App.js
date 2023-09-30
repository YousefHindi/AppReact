import React from 'react';
import './App.css';
import Header from './header'; 
import Main from './Main';
import Browse from './Browse';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
