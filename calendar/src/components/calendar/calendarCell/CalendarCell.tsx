import React from 'react'
import { ICalendarCell } from '../../../types/types'

function CalendarCell({mounth,day, dayOfTheWeek, events, handleChangePopup}: ICalendarCell) {
  const handleEvent = (event: string) => {
    handleChangePopup("change", {day, mounth: mounth + 1, events: event})
  }
  return (
    <div className='calendar-cell'>
      <div className='upper-calendar-cell'>
    <div className='calendar-day'>
    {day}
    </div>
    <div className='calendar-day-of-the-week'>
    {dayOfTheWeek}
    </div>
      </div>
      <div className='events'>
          {events.length !== 0 ? events.map((event) => (
            <div className="event-item" onClick={() => {handleEvent(event)}}>{event}</div>
          )) : null}
      </div>
    </div>
  )
}

export default CalendarCell