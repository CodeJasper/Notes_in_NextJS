import classes from './NoteItemList.module.css'
import Button from '../UI/Button';
import Link from 'next/link';

export default function NoteItemList(props){
  const { note, onView, hrefEdit, onDelete } = props;

  return (
    <div className={classes.note_item_list}>
      <h3 className={classes.note_item_list_title}>{note.title}</h3>
      <p className={classes.note_item_list_description}>{note.description}</p>
      <div className={classes.note_item_list_options}>
        <Button onClick={onView} classes={classes.note_item_list_icon}>
          <span className={`material-icons`}>visibility</span>
        </Button>
        <Link href={"hrefEdit"} >
          <a>
            <span className={`${classes.note_item_list_icon} material-icons`}>edit</span>
          </a>
        </Link>
        <Button onClick={onDelete} classes={classes.note_item_list_icon}>
          <span className={`material-icons`}>delete</span>
        </Button>
      </div>
    </div>
  )
}