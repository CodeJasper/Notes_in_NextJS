import NoteForm from "../../components/Add_note_form/NoteForm"
import { getNote } from "../../helpers/fileHelpers"

export default function DetailNotePage(props){

  const { noteInfo } = props;

  return (
    <>
      <NoteForm noteInfo={noteInfo} />
    </>
  )
}

export async function getStaticProps(context){
  const { params: { noteId }} = context;
  const noteInfo =  getNote(noteId);

  return {
    props: {
      noteInfo
    }
  }
}

export async function getStaticPaths(){
  return {
    paths: [],
    fallback: "blocking"
  }
}