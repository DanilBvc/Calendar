import React, { useState, useEffect } from 'react'
import { ChangePopupData, createPopup } from '../../../types/types';
import { useDispatch } from 'react-redux';
import { dateIsValid } from '../../../utils/utils';
import { changeExistEventAction } from '../../../store/actions/changeExistEventAction';

function ChangePopup({changePopupData, handleChangePopup} : ChangePopupData) {
  const {day, mounth, events} = changePopupData
  const [title, setTitle] = useState('')
  const [titleValid, setTitleValid]  = useState(false)
  const [date, setDate] = useState('')
  const dispatch = useDispatch()
 useEffect(() => {
  setTitle(events)
  setDate(`2023-${mounth}-${day}`)
 }, [])
  const handleDate = (value: string) => {
    setDate(value)
    setTitleValid(dateIsValid(value))
  }
  const handleTitle = (value: string) => {
    setTitle(value)
  }
  const handleSubmit = () =>{
    const submitDay = +date.split("-")[2]
    const submitMounth = +date.split("-")[1] - 1
    dispatch(changeExistEventAction({mounth: submitMounth, day: submitDay, year: 2023,event:title,needToBeChanged: events}))
    handleChangePopup("change", null)
  }
  
  return (
    <div className="popup__wrapper">
      <div className="popup__title">
        <div className="popup__title-text">Edit idea item</div>
        <div className="popup__title-close-btn" onClick={() => {handleChangePopup("change", null)}} >x</div>
      </div>
      <div className="popup__input">
        Title*
        <input value={title} onChange={(e) => {handleTitle(e.target.value)}} type="text"  placeholder="Title goes here" />
      </div>
      <div className="popup__input-date">
        <div className="popup__input-date-left">
          Date format:
          yyyy/mm/dd
          <input value={date} onChange={(e) => {handleDate(e.target.value)}} type="text"  />
        </div>
      </div>
      <div className='popup__input-button'>
        {titleValid ? <button onClick={() => {handleSubmit()}}>Save</button> : <button disabled>Not valid form</button>}
      </div>
    </div>
  );
}

export default ChangePopup