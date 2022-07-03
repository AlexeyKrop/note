import React from 'react';
import {AddItem} from "./AddItem/AddItem";
import {notesType} from "../App";
import {EditableSpan} from "./EditableSpan/EditableSpan";
import s from './Note.module.css'
type NotePropsType = {
  notes: notesType
  addNote: (title: string) => void
  removeNote: (id: string) => void
  changeTitle: (id: string, title: string) => void
}
export const Note = (props: NotePropsType) => {
  const onClickChangeTitle = (id: string, title: string) => {
    props.changeTitle(id, title)
  }
  return (
    <div>
      <AddItem addItem={props.addNote}/>
      {props.notes.map(n => {
        return <div className={s.note} key={n.id}>
          <EditableSpan callBack={(title) => onClickChangeTitle(n.id, title)} title={n.title} />
          <button onClick={() => props.removeNote(n.id)}>x</button>
        </div>
      })}
    </div>
  );
};
