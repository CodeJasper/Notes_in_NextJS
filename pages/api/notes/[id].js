import { deleteNote } from "../../../helpers/fileHelpers";

export default function handler(req, res) {
  if( req.method === "DELETE"){
    const { id } = req.query;
    const response = deleteNote(id);
    if(response.errror){
      res.status(500).json({ message_error: response.message })
    } else {
      res.status(200).json({ message: response.message })
    }
  }
}