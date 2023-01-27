import { initialState } from './../initialState';
import { Mounth } from "../../types/types";

export const getStateReducer = (state: Mounth[][] = initialState, action: {type: string, payload: {mounth: number, day: number, event: string}}) => {
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
        default: return state
    }
}