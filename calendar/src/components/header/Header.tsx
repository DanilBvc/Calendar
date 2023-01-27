import React from 'react'
import HeaderButton from './headerButton/HeaderButton'
import HeaderNavigation from './headerNavigation/HeaderNavigation'
import "./header.css"
import { IPopup } from '../../types/types'
function Header({handlePopup}: IPopup) {
  return (
    <div className='header__wrapper'>
        <HeaderButton handlePopup={handlePopup}  />
        <HeaderNavigation />
    </div>
  )
}

export default Header