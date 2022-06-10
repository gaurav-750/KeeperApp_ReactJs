import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(note){
    console.log("note:", note);

    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        note
      ];
    });
  }

  
  function deleteNote(id){
    //deleting the note using filter() and its 'id'
    const newNotes = notes.filter((item, index) => {
      return index !== id;
    });

    setNotes(newNotes); //set the newNotes after deletion of a particular one
  }

  return (
    <div>
      <Header />
      <CreateArea 
        addNote={addNote}
      />

      {notes.map((note, index) => {
        return (
          <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            deleteNote={deleteNote}
          />
        ) 
      })}

      <Footer />
    </div>
  );
}

export default App;
