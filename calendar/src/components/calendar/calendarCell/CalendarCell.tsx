import React from 'react'
import { ICalendarCell } from '../../../types/types'

function CalendarCell({day, dayOfTheWeek, events}: ICalendarCell) {
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
            <div className="event-item">{event}</div>
          )) : null}
      </div>
    </div>
  )
}

export default CalendarCell