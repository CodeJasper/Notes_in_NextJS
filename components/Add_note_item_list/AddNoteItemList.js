import classes from './AddNoteItemList.module.css'
import Link from 'next/link';

export default function AddNoteItemList(props){
  const { note, onView, hrefEdit, onDelete } = props;

  return (
    <Link href='/notes/addNote'>
      <a>
        <div className={classes.add_note_item_list}>
          <div className={classes.wrapper_icon}>
            <span className={`${classes.icon}  material-icons`}>add</span>
          </div>
        </div>
      </a>
    </Link>
  )
}