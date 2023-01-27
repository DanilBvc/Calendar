import React from 'react'
import HeaderButton from './headerButton/HeaderButton'
import HeaderNavigation from './headerNavigation/HeaderNavigation'
import "./header.css"
import { HeaderProps } from '../../types/types'
function Header({handleMounth, currentMounth}:HeaderProps) {
  return (
    <div className='header__wrapper'>
        <HeaderButton  />
        <HeaderNavigation handleMounth={handleMounth} currentMounth={currentMounth}/>
    </div>
  )
}

export default Header