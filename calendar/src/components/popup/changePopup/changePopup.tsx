import React, { useState, useEffect } from 'react'
import { ChangePopupData, IReducers, createPopup } from '../../../types/types';
import { useDispatch, useSelector } from 'react-redux';
import { dateIsValid } from '../../../utils/utils';
import { changeExistEventAction } from '../../../store/actions/changeExistEventAction';
import { getDeleteEventAction } from '../../../store/actions/deleteExistEventAction';
import './changePopup.css'
function ChangePopup({changePopupData, handleChangePopup} : ChangePopupData) {
  const {day, mounth, events} = changePopupData
  const [title, setTitle] = useState('')
  const [titleValid, setTitleValid]  = useState(false)
  const [date, setDate] = useState('')
  const dispatch = useDispatch()
  const year: number = useSelector((state: IReducers) => state.getInputStateReducer.year)
 useEffect(() => {
  setTitle(events)
  setDate(`${year}-${mounth > 9 ? mounth : '0' + mounth}-${day}`)
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
    dispatch(changeExistEventAction({mounth: submitMounth, day: submitDay, year,event:title,needToBeChanged: events}))
    handleChangePopup("change", null)
  }
  const handleDeleteEvent = () => {
    dispatch(getDeleteEventAction({mounth, year, day, event:events}))
    handleChangePopup("change", null)
  }
  return (
    <div className="popup__wrapper">
      <div className="popup__title">
        <div className="popup__title-text">Edit idea item</div>
        <i className="popup__title-close-btn" onClick={() => {handleChangePopup("change", null)}} ></i>
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
        {titleValid ? <button onClick={() => {handleSubmit()}}>Save</button> : <button disabled>Incorrect date input</button>}
        <button onClick={() => {handleDeleteEvent()}}>Delete</button>
      </div>
    </div>
  );
}

export default ChangePopup