import React, { Component, useState } from 'react';
import { createRoutesFromChildren } from 'react-router-dom';

function Notes(props) {
return (
    <div className='note'>
        <h1>My Note</h1>
        <p>Hey how's it going</p>
    </div>
)

// const { google } = require('googleapis')
// //apiKey = AIzaSyCjY3B87Bu91BriWJQd68cjY9LpLCKBQbE

// const Notes = () => {
// const autho = new google.auth.GoogleAuth({
//     keyFile: ''
// })

//     const [notes, setNote] = useState([]);

//     const createNotes = async notes => {
//         const response = await axios.post()
//         setNote([...notes, response.data]);
//     }
//     const updateNote = editNote => {
//         const state = notes.map((note))
//     }
  
  }

export default Notes;