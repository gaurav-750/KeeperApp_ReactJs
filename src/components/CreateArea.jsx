//importing react and useState:
import React, {useState} from "react";

function CreateArea(props) {

  const [note, setNote] = useState({ //taking an object to keep a track of the state of the note
    title : "",
    content : ""
  });

  function handleChange(e){
    const {name, value} = e.target;
    
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name] : value
      };
    });

  }

  function handleSubmit(e){
    props.addNote(note); //calling the addNote function in App

    setNote({ //setting the note to be empty
      title : "",
      content : ""
    });
    e.preventDefault(); //to prevent the default behaviour of the form
  }


  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input name="title" value={note.title} onChange={handleChange} placeholder="Title" />
        <textarea name="content" value={note.content} onChange={handleChange} placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>

    </div>
  );
}

export default CreateArea;
