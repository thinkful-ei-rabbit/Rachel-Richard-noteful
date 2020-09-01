import React from 'react';

export default function Sidebar(props) {




  const folders = props.folders.map((folder, key) =>{
    return (
      <div className="sidebar-item" key={key}>{folder.name}</div>
    )
  })

return(
    <main>
      <h2>Sidebar</h2>
      {folders}
    </main>
)
  
} 