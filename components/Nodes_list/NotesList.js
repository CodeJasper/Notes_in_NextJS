import { useState } from 'react';
import classes from './NotesList.module.css'
import NoteItemList from "../Node_item_list/NoteItemList";

export default function NotesList (props) {
  const [notes, setNotes] = useState(props.notes)

  const deleteLocalNote = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes)
  }

  const onDelete = (id) => {
    fetch(`/api/notes/${id}`,{
      method: 'DELETE',
    })
    .then(response => response.json())
    .then(() => deleteLocalNote(id))
  }

  return (
    <>
      <h1 className={classes.node_list_title}>Notas</h1>
      <div className={classes.nodes_list}>
        {notes.map((note) => {
          return <NoteItemList onDelete={() => onDelete(note.id)} key={note.id} note={note}/>
        })}
      </div>
    </>
  )
}