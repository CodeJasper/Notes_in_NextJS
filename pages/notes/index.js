import { getAllNotes } from "../../helpers/fileHelpers"
import NotesList from "../../components/Nodes_list/NotesList";

export default function NotesListPage(props) {
  const { notes } = props;
  return(
    <div>
      <NotesList notes={notes} />
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