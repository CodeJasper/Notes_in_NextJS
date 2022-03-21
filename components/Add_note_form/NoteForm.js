import { useState } from "react";
import Button from "../UI/Button"
import InputNote from "../Input_note/InputNote"
import classes from './NoteForm.module.css'
import { useRouter } from "next/router";

export default function NoteForm (props) {

  const { noteInfo } = props;
  const buttonText = noteInfo ? 'Update note' : 'Add note'
  const [note, setNote ] = useState(noteInfo);
  const router = useRouter();

  const handleAddNote = () => {
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

  const handleEditNote = () => {
    fetch(`/api/notes/${noteInfo.id}`,{
      method: 'PUT',
      body: JSON.stringify({ note: {...note}}),
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

  const handleAddNoteRequest = (e) => {
    e.preventDefault();
    if(noteInfo){
      handleEditNote();
    }
    else {
      handleAddNote();
    }
  }

  const onChangeNote = (note) => {
    setNote(note)
  }

  return (
    <form className={classes.form} onSubmit={handleAddNoteRequest}>
      <div className={classes.wrapper_submit_button}>
        <Button classes={classes.submit_button}>{buttonText}</Button>
      </div>
      <InputNote onChangeNote={onChangeNote} note={noteInfo} />
    </form>
  )
}