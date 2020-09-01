import React from "react";

export default function NotePage(props) {

  

const note = props.state.notes.find(p => p.id === props.match.params.noteId)
const d = new Date(note.modified)
  const modified = d.toDateString();
console.log(note);
  return (
    <main>
      <h2>{note.name}</h2>
      <p>{note.content}</p>

      <p>modified: {modified}</p>

    </main>
  )
}
