import React from 'react'
import HeaderSlider from './headerSlider/HeaderSlider'
import HeaderDatePicker from './headerDatePicker/HeaderDatePicker'
import { HeaderProps } from '../../../types/types'
function headerNavigation() {
  return (
    <div>
        <HeaderSlider/>
        <HeaderDatePicker />
    </div>
  )
}

export default headerNavigation