//importing react and useState:
import React, {useState} from "react";

import AddIcon from '@mui/icons-material/Add';


import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';

function CreateArea(props) {

  const [note, setNote] = useState({ //taking an object to keep a track of the state of the note
    title : "",
    content : ""
  });

  //to see if the textarea is expanded or not:
  const [isExpanded, setExpanded] = useState(false);

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

  function expand(){
    setExpanded(true);
  }


  return (
    <div>

      <form className="create-note">

        {isExpanded ? <input name="title" value={note.title} onChange={handleChange}
          placeholder="Title" />
          : null
        }
     
        <textarea name="content" value={note.content} onChange={handleChange}
           onClick={expand} placeholder="Take a note..." rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded} timeout={500} onClick={handleSubmit}>
          <Fab color="secondary" aria-label="add">
            <AddIcon />
          </Fab>
        </Zoom>
 
      </form>

    </div>
  );
}

export default CreateArea;
