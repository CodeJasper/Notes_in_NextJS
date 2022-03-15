// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { addNote } from "../../../helpers/fileHelpers"
import { uid } from 'uid';

export default function handler(req, res) {
  if(req.method === "POST"){
    const note = req.body;
    note.id = uid()
    const response = addNote(note);
    if(response.errror){
      res.status(500).json({ message_error: response.message })
    } else {
      res.status(200).json({ message: response.message, note: note })
    }
  }
}
