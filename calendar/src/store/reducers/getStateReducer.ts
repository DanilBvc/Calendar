import { generateState } from './../../utils/utils';
import { initialState } from './../initialState';
import { Mounth } from "../../types/types";

export const getStateReducer = (state: Mounth[][] = initialState, action: {type: string, payload: {mounth: number, day: number,year: number, event: string, needToBeChanged?: string}}) => {
    switch(action.type){
        case "GET_STATE" : {
            state.forEach((mounth) => {
                mounth.forEach((currentMounth) => {
                    if(currentMounth.mounth === action.payload.mounth) {
                        return mounth
                    }
                })
            })
            return state
        }
        case "SET_NEW_EVENT" : {
            state.forEach((mounth) => {
                if(mounth[0].mounth === action.payload.mounth) {
                    mounth.forEach((currentMounth) => {
                        if(currentMounth.day === action.payload.day) {
                            currentMounth.event = [...currentMounth.event, action.payload.event]
                        }
                    })
                }
            })
            return state
        }
        case "CHANGE_EXIST_EVENT": {
            state.forEach((mounth) => {
                if(mounth[0].mounth === action.payload.mounth) {
                    mounth.forEach((day) => {
                        if(day.day === action.payload.day) {
                            let filteredArray = day.event.filter((e) => {
                                return e !== action.payload.needToBeChanged
                            })
                            day.event = [...filteredArray, action.payload.event]
                        }
                    })
                }
            })
            return state
        }
        case "SET_NEW_DATE": {
            return generateState(action.payload.year)
        }
        default: return state
    }
}