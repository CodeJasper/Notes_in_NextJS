import fs from 'fs';
import path from 'path';

function getFilePath(){
  const filePath = path.join(process.cwd(), 'data', 'notes.json');
  return filePath;
}

export function readNotesFile(){
  const filePath = getFilePath();
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

export function addNote(note){
  const file = readNotesFile();
  const notes = JSON.parse(file);
  notes.push(note);
  try {
    fs.writeFileSync(getFilePath(), JSON.stringify(notes));
    return { message: 'Note added successfully'}
  } catch (error) {
    return { errror: true, message: error}
  }
}