import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Weather from './pages/weather'
import Header from './component/dashboard';

import CreateArea from './pages/Area';
import Notes from './pages/notes';


function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start">
        <Header />
        <div className="container-main">
          <Routes>
            <Route
              path="/"
              element={<Weather />}
            />
            <Route
            path='/Notes'
            element= {<div><CreateArea /><Notes /></div>}
            />
            <Route
            path="/Weather"
            element={<Weather />}
          />
    </Routes>
    </div>
    </div>
    </Router>
  )
}


export default App;
