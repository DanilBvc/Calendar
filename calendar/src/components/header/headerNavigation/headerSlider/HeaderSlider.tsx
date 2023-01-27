import React from 'react'
import './headerSlider.css'
import { IReducers, InitialInputState } from '../../../../types/types'
import { getMounthNameByNumber } from '../../../../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setNewSliderInputValue } from '../../../../store/actions/setNewSliderInputValue'
function HeaderSlider() {
  const sliderDate:InitialInputState = useSelector((state: IReducers) => state.getInputStateReducer)
  const dispatch = useDispatch()

  return (
    <div className='header-slider__wrapper'>
      <div className='arrow-left' onClick={() => {dispatch(setNewSliderInputValue({input : '',inputType: 'decrease'}))}}>
      🡸
      </div>
      <div>
        {getMounthNameByNumber(sliderDate.sliderMounth)}
      </div>
      <div className='arrow-right' onClick={() => {dispatch(setNewSliderInputValue({input : '',inputType: 'increase'}))}}> 
      🡺
      </div>
    </div>
  )
}

export default HeaderSlider