import React from "react";
import { Link } from 'react-router-dom';
/* import { Route } from 'react-router-dom';
import NotePage from './NotePage';
import FolderPage from './FolderPage'; */

export default function MainPage(props) {
  const notes = props.state.folders.map((folder, idx) => {
    return (<li key={idx}>{folder.name}</li>)
  })
  return (
    <div>
      MainPage Showing
      <Link to={'/NotePage'}>NotePage</Link>
      {/* <FolderList />
      <NoteList /> */}
      <ul>{notes}</ul>
      <br /><br />
      <button> Add Note </button>
    </div>
  );
}