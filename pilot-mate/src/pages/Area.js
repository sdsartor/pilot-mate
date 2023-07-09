import React, { useEffect, useState } from "react";
import {GrAdd} from 'react-icons/gr';

function CreateArea({ submitButton, onAdd }) {
    const [isExpanded, setExpanded] = useState(false);
    const [note, setNote] = useState({
        title: '',
        content: '',
    });

    const [data, setData] = useState(() => {
        const savedState = localStorage.getItem('notesdata');
        const data = JSON.parse(savedState);
        return data || [];
    });

    useEffect(() => {
    localStorage.setItem('notesdata', JSON.stringify(data));
    }, [data]);


    function handleChange(e) {
        const{ name, value } = e.target;
        setNote((preValue) => {
            return {
                 ...preValue,
                [name]: value,
            };
        });
    }
function handleExpanded(event) {
    setExpanded(true);
}

    function submitButton(event) {
        onAdd(note);
        setNote({
            title: '',
            content: '',
        })
        event.preventDefault()
    }
    return (
        <div className="background">
            <form>
                {isExpanded && (
                <input value={note.title} type="text" placeholder="Make a Note." name="title" onChange={handleChange} style={{color: 'black', border:"3px inset lightgray"}} />
)}
                <p style={{border:"3px inset lightgray", color: 'black'}}>
                    <textarea value={note.content} onClick={handleExpanded} name="content" onChange={handleChange} placeholder="Make a note" ></textarea>
                </p>
                <button onClick={submitButton}><GrAdd/></button>
            </form>
        </div>
    )
}

export default CreateArea;