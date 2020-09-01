import React from "react";

export default function NotePage(props) {
  const handleClick = () => {
    props.history.push('/')
  }

  const note = props.state.notes.find(
    (p) => p.id === props.match.params.noteId
  );
  const d = new Date(note.modified);
  const modified = d.toDateString();
  return (
    <>
      <div className="sidebar">
        <button onClick={() => handleClick()}>Go Back</button>
      </div>

      <main>
        <h2>{note.name}</h2>
        <p>{note.content}</p>

        <p>Modified: {modified}</p>
      </main>
    </>
  );
}
