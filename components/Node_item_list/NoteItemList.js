import classes from './NoteItemList.module.css'

export default function NoteItemList(props){
  const { note } = props;

  return (
    <div className={classes.note_item_list}>
      <h3 className={classes.note_item_list_title}>{note.title}</h3>
      <p className={classes.note_item_list_description}>{note.description}</p>
    </div>
  )
}