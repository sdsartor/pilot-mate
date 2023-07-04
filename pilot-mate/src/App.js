import React from 'react';
import './App.css';
import Weather from './pages/weather'
import Header from './component/dashboard';
import Notes from './pages/notes';
import CreateArea from './pages/Area';


function App() {
  return (
    <>
    <Header />
    <CreateArea />
    <Notes />
    <Weather />
    </>
  )
}


export default App;
