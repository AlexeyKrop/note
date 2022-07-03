import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import s from './AddItem.module.css'

type AddItemPropsType = {
  addItem: (title: string) => void
}
export const AddItem = (props: AddItemPropsType) => {
  const [value, setValue] = useState<string>('')
  const[error, setError] = useState('')
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const onClickHandler = () => {
    if(value.trim()){
      props.addItem(value.trim())
      setValue('')
    }else{
      setError('input field is empty')
    }
  }
  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if(error){
      setError('')
    }
    if(e.key === 'Enter'){
      onClickHandler()
    }
  }
  return (
    <div className={s.addNote}>
      <input onKeyPress={onKeyPressHandler} onChange={onChangeHandler} value={value} type="text"/>
      <button onClick={onClickHandler}>+</button>
      <p>{error}</p>
    </div>
  );
};

