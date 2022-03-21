import { useRef, useEffect, useState } from "react";
import classes from './InputNote.module.css'

export default function InputNote({ onChangeNote, note }) {

  const [title, setTitle] = useState(note ? note.title: '');
  const [description, setDescription] = useState(note ? note.description: '');
  const descriptionRef = useRef();

  const changeTextAreaHeight = (element) => {
    const { scrollHeight } = element;
    element.style.height = `${scrollHeight}px`
  }

  useEffect(() => {
    const { current } = descriptionRef;
    if(current){
      changeTextAreaHeight(current)
    }
  }, [descriptionRef])

  const onChangeTextArea = (e) => {
    const { target: { value }, target } = e;
    setDescription(value)
    changeTextAreaHeight(target)
    onChangeNote({title, description: value})
  }

  const onChangeTitle = (e) => {
    const { target: { value } } = e;
    setTitle(value)
    onChangeNote({title: value, description})
  }

  return (
    <div className={classes.wrapper_input_note}>
      <input
        className={classes.wrapper_input_note_title}
        placeholder="Note title"
        required
        onChange={onChangeTitle}
        value={title}
      />
      <textarea
        className={classes.wrapper_input_note_textarea}
        placeholder="Note description"
        ref={descriptionRef}
        onChange={onChangeTextArea}
        required
        value={description}
      />
    </div>
  )
}