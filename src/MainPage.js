import React from "react";
import './MainPage.css';
/* import { Link } from 'react-router-dom'; */
/* import { Route } from 'react-router-dom';
import NotePage from './NotePage';
import FolderPage from './FolderPage'; */

export default function MainPage(props) {
  const notes = props.state.notes.map((note, idx) => {
    return (
    <li key={idx}>
      <div className='notes-main'>
      <h3>{note.name}</h3>
      <p>{note.content}</p>
      </div>
    </li>
    
    )
  })
  return (
    <div>
      {/* <FolderList />
      <NoteList /> */}
      <ul>{notes}</ul>
      <br /><br />
      <button> Add Note </button>
    </div>
  );
}