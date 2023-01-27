import React, {useState} from 'react';
import { dateIsValid } from '../../../utils/utils';
import { useDispatch } from 'react-redux';
import { setNewEventAction } from '../../../store/actions/setNewEventAction';
import { createPopup } from '../../../types/types';

export const CreatePopupComponent = ({handlePopup} : createPopup) => {
  const [title, setTitle] = useState('')
  const [titleValid, setTitleValid]  = useState(false)
  const [date, setDate] = useState('')
  const dispatch = useDispatch()
  const handleDate = (value: string) => {
    setDate(value)
    setTitleValid(dateIsValid(value))
  }
  const handleTitle = (value: string) => {
    setTitle(value)
  }
  const handleSubmit = () => {
    const day = +date.split("-")[2]
    const mounth = +date.split("-")[1] - 1
    dispatch(setNewEventAction({mounth, day, event: title}))
    handlePopup("add")
  }
  return (
    <div className="popup__wrapper">
      <div className="popup__title">
        <div className="popup__title-text">Add new idea item</div>
        <div className="popup__title-close-btn" onClick={() => {handlePopup("add")}}>x</div>
      </div>
      <div className="popup__input">
        Title*
        <input value={title} type="text" onChange={(e) => {handleTitle(e.target.value)}} placeholder="Title goes here" />
      </div>
      <div className="popup__input-date">
        <div className="popup__input-date-left">
          Date format:
          yyyy/mm/dd
          <input value={date} type="text" onChange={(e) => {handleDate(e.target.value)}} />
        </div>
      </div>
      <div className='popup__input-button'>
        {titleValid ? <button onClick={() => {handleSubmit()}}>Save</button> : <button disabled>Not valid form</button>}
      </div>
    </div>
  );
}

