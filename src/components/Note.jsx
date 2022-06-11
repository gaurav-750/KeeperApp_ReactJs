import React from "react";

import DeleteIcon from '@mui/icons-material/Delete';

function Note(props) {

  function deleteNoteFromArray(){
    props.deleteNote(props.id); //sending the index of the note (from array)
  }

  return (
    <div className="note">

      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button onClick={deleteNoteFromArray} >
        <DeleteIcon />
      </button>
      

    </div>
  );
}

export default Note;
