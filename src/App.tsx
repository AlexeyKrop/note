import React, {useState} from 'react';

import './App.css';
import {Note} from "./component/Note";
type noteType = {
  id: number, title: string, priority: string
}
export type notesType = Array<noteType>
function App() {
  const[notes, setNote] = useState<notesType>([
    {id: 1, title: 'Learn English', priority: 'important'},
    {id: 2, title: 'Learn Chinese', priority: 'unimportant'}
  ])
  return (
    <div className="App">
          <Note notes={notes}/>
    </div>
  );
}

export default App;
