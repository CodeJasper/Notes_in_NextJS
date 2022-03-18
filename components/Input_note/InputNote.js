import { useRef, useEffect} from "react";
import classes from './InputNote.module.css'

export default function InputNote({ onChangeNote }) {

  const titleRef = useRef();
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

  const buildNote = ()  => {
    const { current: { value: title }} = titleRef;
    const { current: { value: description }} = descriptionRef;
    return {
      title,
      description
    }
  }

  const onChangeTextArea = (e) => {
    changeTextAreaHeight(e.target)
    onChangeNote(buildNote)
  }

  const onChangeTitle = (e) => {
    onChangeNote(buildNote)
  }

  return (
    <div className={classes.wrapper_input_note}>
      <input className={classes.wrapper_input_note_title} placeholder="Note title" ref={titleRef} required onChange={onChangeTitle} />
      <textarea className={classes.wrapper_input_note_textarea} placeholder="Note description" ref={descriptionRef} onChange={onChangeTextArea} required />
    </div>
  )
}