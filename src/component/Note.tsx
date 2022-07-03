import React from 'react';
import {AddItem} from "./AddItem/AddItem";
import {notesType} from "../App";

type NotePropsType = {
  notes: notesType
  addNote: (title: string) => void
  removeNote: (id: string) => void
  changeTitle: (id: string, title: string) => void
}
export const Note = (props: NotePropsType) => {
  const onClickChangeTitle = () => {

  }
  return (
    <div>
      <AddItem addItem={props.addNote}/>
      {props.notes.map(n => {
        return <div key={n.id}>{n.title}
          <button onClick={() => onClickChangeTitle()}>edit</button>
          <button onClick={() => props.removeNote(n.id)}>x</button>
        </div>
      })}
    </div>
  );
};
