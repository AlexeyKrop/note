import React from 'react';
import {AddItem} from "./AddItem/AddItem";
import {notesType} from "../App";

type NotePropsType = {
  notes: notesType
}
export const Note = (props: NotePropsType) => {
  return (
    <div>
      <AddItem/>
      {props.notes.map(n => {
        return <div key={n.id}>{n.title}
          <button>edit</button>
          <button>x</button>
        </div>
      })}
    </div>
  );
};
