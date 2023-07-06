import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Weather from './pages/weather'
import Header from './component/dashboard';

import CreateArea from './pages/Area';
import Notes from './pages/notes';
import Count from './pages/Count';


function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((preValue) => {
      return [...preValue, newNote];
    });
  }

  function deleteNotes(id) {
    setNotes(preValue => {
      return [...preValue.filter((note, index) =>
      index !== id ) ]
    })
  }
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
            element= {<div><CreateArea onAdd={addNote} />
            {notes.map((note, index) => (
            <Notes key={index} id={index} title={note.title} content={note.content} onDelete={deleteNotes} 
            />
            ))}
           <Count count={notes.length === 0? 'Empty :(': `Showing ${notes.length} Note(s) in Database`} /></div>
            }
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
