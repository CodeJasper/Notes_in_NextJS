import { getNote } from "../../helpers/fileHelpers"

export default function DetailNotePage(props){
  return (
    <>
      <h1>Detalle de una nota</h1>
      <p>{props.note.title}</p>
    </>
  )
}

export async function getStaticProps(context){
  const { params: { noteId }} = context;
  const note =  getNote(noteId);
  console.log(note)

  return {
    props: {
      note: {}
    }
  }
}

export async function getStaticPaths(){
  return {
    paths: [],
    fallback: "blocking"
  }
}