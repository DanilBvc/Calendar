import React from 'react'
import './headerButton.css'
import { useDispatch, useSelector } from 'react-redux'
import { setNewEventAction } from '../../../store/actions/setNewEventAction'
function HeaderButton() {
  const [day, setDay] = React.useState(1)
  const dispatch = useDispatch()
  const handleButton = (event: {
    mounth: number,
    day: number,
    event: string
  }) => {
    dispatch(setNewEventAction(event))
    setDay(prev => prev += 1)
  }
  return (
    <>
    <button onClick={() => {
      handleButton({mounth: 1, day: day, event: "newPrikol"})
    }} className='header-button'>+</button>
    </>
  )
}

export default HeaderButton