import fs from 'fs';
import path from 'path';

export function readNotesFile(){
  const filePath = path.join(process.cwd(), 'data', 'notes.json');
  const file = fs.readFileSync(filePath);
  return file;
}

export function getAllNotes(){
  const file = readNotesFile();
  const notes = JSON.parse(file);
  return notes;
}

export function getNote(id){
  const file = readNotesFile();
  const notes = JSON.parse(file);
  const note = notes.find(note => note.id == id);
  return note;
}