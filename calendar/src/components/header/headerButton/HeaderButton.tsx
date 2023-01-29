import React from 'react'
import './headerButton.css'
import { IPopup } from '../../../types/types'
function HeaderButton({handlePopup}: IPopup) {
  return (
    <>
    <button onClick={() => {
      handlePopup("add")
    }} className='header-button'>+</button>
    </>
  )
}

export default HeaderButton