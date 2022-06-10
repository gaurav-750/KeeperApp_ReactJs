import React from "react";

function Note(props) {

  function deleteNoteFromArray(){
    props.deleteNote(props.id); //sending the index of the note (from array)
  }

  return (
    <div className="note">

      <h1>{props.title}</h1>
      <p>{props.content}</p>

      <button onClick={deleteNoteFromArray} >DELETE</button>

    </div>
  );
}

export default Note;
