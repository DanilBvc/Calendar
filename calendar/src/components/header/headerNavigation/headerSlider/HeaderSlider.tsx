import React from 'react'
import './headerSlider.css'
import { IReducers, InitialInputState } from '../../../../types/types'
import { getMounthNameByNumber } from '../../../../utils/utils'
import { useDispatch, useSelector } from 'react-redux'
import { setNewSliderInputValue } from '../../../../store/actions/setNewSliderInputValue'
import { setNewDateAction } from '../../../../store/actions/setNewDateAction'
function HeaderSlider() {
  const sliderDate:InitialInputState = useSelector((state: IReducers) => state.getInputStateReducer)
  const dispatch = useDispatch()
  const handleLeft = () => {
    dispatch(setNewSliderInputValue({input : '',inputType: 'decrease'}))
    if(sliderDate.sliderMounth === 0) {
      dispatch(setNewDateAction({mounth: 0, day: 0, year: sliderDate.year - 1, event: ''}))
    }
  }
  const handleRight = () => {
    dispatch(setNewSliderInputValue({input : '',inputType: 'increase'}))
    if(sliderDate.sliderMounth === 11) {
      dispatch(setNewDateAction({mounth: 0, day: 0, year: sliderDate.year + 1, event: ''}))
    }
  }
  return (
    <div className='header-slider__wrapper'>
      <div className='arrow-left' onClick={() => {handleLeft()}}>
      🡸
      </div>
      <div>
        {getMounthNameByNumber(sliderDate.sliderMounth)}{sliderDate.year}
      </div>
      <div className='arrow-right' onClick={() => {handleRight()}}>
      🡺
      </div>
    </div>
  )
}

export default HeaderSlider