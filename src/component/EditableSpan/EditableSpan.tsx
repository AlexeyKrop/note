import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
  title: string
  callBack: (title: string) => void
}
export const EditableSpan = (props: EditableSpanType) => {
  const [value, setValue] = useState<string>(props.title)
  const [editMode, setEditMode] = useState<boolean>(false)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value)
  }
  const onEditModeChange = () => {
    setEditMode(!editMode)
  }
  const onBlurHandler = () => {
    setEditMode(!editMode)
    props.callBack(value)
  }
  const onClickHandler = () => {
    setEditMode(!editMode)
  }
  return (
    <>{
      editMode ? <input onBlur={onBlurHandler} autoFocus onChange={onChangeHandler} value={value} type="text"/> : <span onDoubleClick={onEditModeChange}>{props.title}</span>
    }
      <button onClick={onClickHandler}>edit</button>
    </>
  );
};

