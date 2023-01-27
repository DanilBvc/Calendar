import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStateAction } from '../../store/actions/getStateAction'
import CalendarCell from './calendarCell/CalendarCell'
import "./calendar.css"
import { CalendarProps, IReducers, Mounth } from '../../types/types'
function Calendar({ currentMounth }: CalendarProps) {
  const state: Mounth[][] = useSelector((state: IReducers) => state.getStateReducer)
  // const dispatch = useDispatch()
  // dispatch(getStateAction({mounth: 4}))
  return (
    <div className='calendar-wrapper'>
      {state[currentMounth].map((item: any) => (
        <CalendarCell day={item.day} dayOfTheWeek={item.dayOfTheWeek} events={item.event}/>
      ))}
    </div>
  )
}

export default Calendar