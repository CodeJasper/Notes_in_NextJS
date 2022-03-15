import classes from './NotesList.module.css'
import NoteItemList from "../Node_item_list/NoteItemList";

export default function NotesList (props) {
  const { notes } = props;

  return (
    <>
      <h1 className={classes.node_list_title}>Notas</h1>
      <div className={classes.nodes_list}>
        {notes.map((note) => {
          return <NoteItemList key={note.id} note={note}/>
        })}
      </div>
    </>
  )
}