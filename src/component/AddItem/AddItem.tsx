import React from 'react';
import s from './AddItem.module.css'
export const AddItem = () => {
  return (
    <div className={s.addNote}>
      <input type="text"/>
      <button>+</button>
    </div>
  );
};

