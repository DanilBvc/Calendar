import React from 'react'
import HeaderSlider from './headerSlider/HeaderSlider'
import HeaderDatePicker from './headerDatePicker/HeaderDatePicker'
import { HeaderProps } from '../../../types/types'
function headerNavigation({handleMounth, currentMounth}: HeaderProps) {
  return (
    <div>
        <HeaderSlider handleMounth={handleMounth} currentMounth={currentMounth}/>
        <HeaderDatePicker />
    </div>
  )
}

export default headerNavigation