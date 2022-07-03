import React, {useState} from 'react';

import './App.css';
import {Note} from "./component/Note";
import {v1} from "uuid";

type noteType = {
  id: string, title: string, priority: PriorityType
}
type PriorityType = 'important' | 'unimportant'
export type notesType = Array<noteType>

function App() {
  const [notes, setNote] = useState<notesType>([
    {id: v1(), title: 'Learn English', priority: 'important'},
    {id: v1(), title: 'Learn Chinese', priority: 'unimportant'}
  ])
  const addNote = (newTitle: string) => {
    const newNote: noteType = {
      id: v1(),
      title: newTitle,
      priority: 'unimportant'
    }
    setNote([newNote, ...notes])
  }
  const removeNote = (id: string) => {
    setNote(notes.filter(n => n.id !== id))
  }
  const changeTitle = (id: string, title: string) => {
    setNote(notes.map(n => n.id === id ? {...n, title} : n))
  }
  return (
    <div className="App">
      <Note changeTitle={changeTitle} removeNote={removeNote} addNote={addNote} notes={notes}/>
    </div>
  );
}

export default App;
