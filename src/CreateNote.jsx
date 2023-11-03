import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';



const CreateNote = (props) => {


    const [expand, setExpand]= useState(false);

    const [note, setnote] = useState({
        
        title:'',
        content:'',
    });

    const InputEvent = (event)  =>{
        const{name, value} = event.target;
        
        setnote((prevDeta) =>{
            return{
                ...prevDeta,
                [name]: value,
            };
        });
        console.log(note);
    };

    const addEvent = () => {
        props.passNote(note);
        setnote({
            title:"",
            content:"",

        });

    };

    const expandIt = () =>{
        setExpand(true);
    };

    const backtonormal = () => {
        setExpand(false);

    };


    return(
        <>
        <div className="main_note" onDoubleClick={backtonormal}>
        <form>
            {expand?
            <input type="text" 
           name="title"
            value={note.title} 
            onChange={InputEvent}
             placeholder="Title"
              autoComplete="off"
              />: null}

            <textarea rows="" 
            column="" 
           name="content"
            value={note.content}
            onChange={InputEvent}
            placeholder="write a note..."
                onClick={expandIt}
           ></textarea>

           {expand? (
            <Button onClick={addEvent}>
                <AddIcon className="plus_sign"/>
            </Button> ) : null}
           
        </form>
        </div>
        </>
    );
};

export default CreateNote;