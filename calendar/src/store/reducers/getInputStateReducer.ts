import { InitialInputState } from '../../types/types';
import { initialInputsState } from './../initialState';
export const getInputStateReducer = (state: InitialInputState = initialInputsState, action: {type: string, payload: {
    input: string
}}) => {
    switch(action.type){
        case "CHANGE_INPUT" : {
            
            return state
        }
        case "GET_INPUT" : {
            
            return state
        }
        default: return state
    }
}