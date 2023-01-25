import React from 'react'
import HeaderButton from './headerButton/HeaderButton'
import HeaderNavigation from './headerNavigation/HeaderNavigation'

function Header() {
  return (
    <div className='header__wrapper'>
        <HeaderButton />
        <HeaderNavigation />
    </div>
  )
}

export default Header