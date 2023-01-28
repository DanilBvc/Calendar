import React from 'react'
import {  useSelector } from 'react-redux'
import CalendarCell from './calendarCell/CalendarCell'
import "./calendar.css"
import { ICalendar, IReducers, InitialInputState, Mounth } from '../../types/types'
function Calendar({handleChangePopup} : ICalendar) {
  const state: Mounth[][] = useSelector((state: IReducers) => state.getStateReducer)
  const sliderDate:InitialInputState = useSelector((state: IReducers) => state.getInputStateReducer)
  const currentMounth: number = sliderDate.sliderMounth
  return (
    <div className='calendar-wrapper'>
      {state[currentMounth].map((item: any) => (
        <CalendarCell mounth={currentMounth} day={item.day} dayOfTheWeek={item.dayOfTheWeek} events={item.event} handleChangePopup={handleChangePopup}/>
      ))}
    </div>
  )
}

export default Calendar