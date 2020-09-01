import React from "react";
import Notes from "./Notes";
import Sidebar from './Sidebar';
import './MainPage.css';

export default function FolderPage(props) {
  const note = props.state.notes.filter(
    (p) => p.folderId === props.match.params.foldId
  );
  return (
    <>
      <div className="sidebar">
        <Sidebar folders={props.state.folders} />
      </div>
      
      <main className="main-div">
        <ul>
          <Notes notes={note} />
        </ul>
      </main>
    </>
  );
}
