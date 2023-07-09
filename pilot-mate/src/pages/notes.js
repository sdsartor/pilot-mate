import React, { Component, useState } from 'react';
import { createRoutesFromChildren } from 'react-router-dom'
import {FaTrash} from 'react-icons/fa6'

function Notes({title, content, onDelete, id }) {
return (
    <div className='note'>
      <div className='words'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={() => onDelete(id)}><FaTrash size={20}/></button>
    </div>
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