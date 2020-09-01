import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  const folders = props.folders.map((folder, key) => {
    return (
      <div className="sidebar-item" key={key}>
        <Link to={`/FolderPage/${folder.id}`}>
          <h3>{folder.name}</h3>
        </Link>
      </div>
    );
  });

  return (
    <main>
      <h2>Sidebar</h2>
      {folders}
    </main>
  );
}
