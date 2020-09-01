import React from "react";
import { Link } from "react-router-dom";

// import NotePage from './NotePage'

export default function Notes(props) {
  const listNotes = props.notes.map((note, idx) => {
    const d = new Date(note.modified);
    const modified = d.toDateString();

    return (
      <li key={idx}>
        <div className="notes-main">
          <Link to={`/NotePage/${note.id}`}>
            <h3>{note.name}</h3>
          </Link>
          <p>Modified: {modified}</p>
        </div>
      </li>
    );
  });

  return listNotes;
}
