import { getAllNotes } from "../../helpers/fileHelpers"

export default function NotesListPage(props) {
  return(
    <div>
      <h1>Notas</h1>
      {props.notes.map((note) => {
        return ( <p key={note.id}>{note.title}</p>)
      })}
    </div>
  )
}

export async function getStaticProps() {
  const notes = getAllNotes();

  return {
    props: {
      notes
    }
  }
}