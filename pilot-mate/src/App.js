import React from 'react';
import './App.css';
import Weather from './pages/weather'
import Dashboard from './component/dashboard';
import Notes from './pages/notes';
import createArea from './pages/Area';


function App() {
  return (
    <>
    <Dashboard />
    <createArea />
    <Notes />
    <Weather />
    </>
  )
}


export default App;
