import React from 'react'
import HeaderSlider from './headerSlider/HeaderSlider'
import HeaderDatePicker from './headerDatePicker/HeaderDatePicker'
function headerNavigation() {
  return (
    <div className='header-navigation__wrapper'>
        <HeaderSlider/>
        <HeaderDatePicker />
    </div>
  )
}

export default headerNavigation