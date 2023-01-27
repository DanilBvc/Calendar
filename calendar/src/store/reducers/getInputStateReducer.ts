import { InitialInputState } from '../../types/types';
import { initialInputsState } from './../initialState';
export const getInputStateReducer = (state: InitialInputState = initialInputsState, action: {type: string, payload: {
    input: string,
    inputType : string,
}}) => {
    switch(action.type){
        case "CHANGE_INPUT_SLIDER" : {
            if(action.payload.input.length > 0) {
                return {
                    ...state,
                    sliderMounth: +action.payload.input
                  }
            }
            if(action.payload.inputType === "increase") {
                if(state.sliderMounth === 11) {
                    return {
                        ...state,
                        sliderMounth: 0
                      }
                }else {
                  return {
                    ...state,
                    sliderMounth: state.sliderMounth + 1
                  }
                }
              }
             if(action.payload.inputType === 'decrease') {
                if(state.sliderMounth === 0) {
                    return {
                        ...state,
                        sliderMounth: 11
                      }
              }else {
                return {
                    ...state,
                    sliderMounth: state.sliderMounth - 1
                  }
              }
             }
            return state
        }
        case "CHANGE_INPUT_DATEPICKER" : {
            return {
                ...state,
                datePicker: action.payload.input
            }
        }
        default: return state
    }
}