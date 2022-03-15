import { useRef } from "react";

export default function AddNoteFormPage(){

  const titleRef = useRef();
  const descriptionRef = useRef();

  const handleAddNoteRequest = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    const note = {
      title,
      description,
    }
    fetch('/api/note',{
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(response => console.log(response))
  }

  return (
    <form onSubmit={handleAddNoteRequest}>
      <input placeholder="Note title" ref={titleRef} required />
      <textarea placeholder="Note description" ref={descriptionRef} required />
      <input type='submit' />
    </form>
  )
}