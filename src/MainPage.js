import React from "react";
import './MainPage.css';
/* import { Link } from 'react-router-dom'; */
/* import { Route } from 'react-router-dom';
import NotePage from './NotePage';
import FolderPage from './FolderPage'; */

import Notes from "./Notes"

export default function MainPage(props) {
 
  return (
    <div className='main-div'>
      {/* <FolderList />
      <NoteList /> */}
      <ul>
        <Notes notes={props.state.notes}/>
      </ul>
      <br /><br />
      <button> Add Note </button>
    </div>
  );
}