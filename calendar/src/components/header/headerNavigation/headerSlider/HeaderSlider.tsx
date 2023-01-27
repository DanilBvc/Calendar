import React from 'react'
import './headerSlider.css'
import { HeaderProps } from '../../../../types/types'
import { getMounthNameByNumber } from '../../../../utils/utils'
function HeaderSlider({handleMounth, currentMounth}: HeaderProps) {
  return (
    <div className='header-slider__wrapper'>
      <div className='arrow-left' onClick={() => {handleMounth("decrease")}}>
      🡸
      </div>
      <div>
        {getMounthNameByNumber(currentMounth)}
      </div>
      <div className='arrow-right' onClick={() => {handleMounth("increase")}}>
      🡺
      </div>
    </div>
  )
}

export default HeaderSlider