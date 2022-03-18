import { useState } from "react";
import Button from "../UI/Button"
import InputNote from "../Input_note/InputNote"
import classes from './AddNoteForm.module.css'
import { useRouter } from "next/router";

export default function AddNoteForm () {

  const [note, setNote ] = useState();
  const router = useRouter();

  const handleAddNoteRequest = (e) => {
    e.preventDefault();
    fetch('/api/notes/note',{
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => {
      if(response.note){
        router.replace('/notes')
      }
    })
  }

  const onChangeNote = (note) => {
    setNote(note)
  }

  return (
    <form className={classes.form} onSubmit={handleAddNoteRequest}>
      <div className={classes.wrapper_submit_button}>
        <Button classes={classes.submit_button}>Add note</Button>
      </div>
      <InputNote onChangeNote={onChangeNote} />
    </form>
  )
}