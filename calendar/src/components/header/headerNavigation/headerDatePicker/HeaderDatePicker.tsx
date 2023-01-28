import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IReducers } from '../../../../types/types'
import { setNewDatePickerInputValue } from '../../../../store/actions/setNewDatePickerInputValue'
import { setNewDateAction } from '../../../../store/actions/setNewDateAction'
import { setNewSliderInputValue } from '../../../../store/actions/setNewSliderInputValue'
import './headerDatePicker.css'
function HeaderDatePicker() {
  const DatePicker = useSelector((state: IReducers) => state.getInputStateReducer)
  const SliderValue: number = DatePicker.sliderMounth
  const dispatch = useDispatch()
  const datePickerHandler = (date: string) => {
    const splittedDate = date.split('-')
   if(date.length > 0) {
    dispatch(setNewDatePickerInputValue({input: date,inputType: ''}))
    if(SliderValue + 1 !== +splittedDate[1] ) {
      dispatch(setNewSliderInputValue({input : `${+splittedDate[1] - 1}`,inputType: ''}))
    }
    if(+splittedDate[0] !== 2023) {
      dispatch(setNewDateAction({mounth: +splittedDate[1], day: +splittedDate[2], year: +splittedDate[0], event: ''}))
    }
   }
  }
  const day = DatePicker.datePicker.split("-")[2]
  const date = `${DatePicker.year}-${DatePicker.sliderMounth >= 9 ? '' : '0'}${DatePicker.sliderMounth + 1}-${day}`
  return (
    <div>
      <input type="date" id="start" name="trip-start"
    value={date}
    onChange={(e) => {datePickerHandler(e.target.value)}}
     /></div>
  )
}

export default HeaderDatePicker