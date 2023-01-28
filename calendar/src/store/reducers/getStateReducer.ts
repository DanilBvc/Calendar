import { generateState } from './../../utils/utils';
import { initialState } from './../initialState';
import { Mounth } from "../../types/types";

export const getStateReducer = (state: Mounth[][] = initialState, action: {type: string, payload: {mounth: number, day: number,year: number, event: string, needToBeChanged?: string, fromLoacalStorage?: boolean}}) => {
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
                        if(currentMounth.day === action.payload.day && currentMounth.year === action.payload.year) {
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
                        if(day.day === action.payload.day && day.year === action.payload.year) {
                            const filteredArray = day.event.filter((e) => {
                                return e !== action.payload.needToBeChanged
                            })
                            day.event = [...filteredArray, action.payload.event]
                        }
                    })
                }
            })
            return state
        }
        case "DELETE_EVENT" : {
            state.forEach((mounth) => {
              mounth.forEach((day) => {
                if(day.year === action.payload.year && day.day === action.payload.day && day.mounth === action.payload.mounth - 1) {
                    let arr: string[] = day.event
                    let events = arr.find(item => item === action.payload.event)
                    if(events !== undefined) {
                       let index = arr.indexOf(events)
                      let result = arr.slice(0, index).concat(arr.slice(index+1))
                      day.event =  [...result]
                    }
                }
              })
            })
            return state
        }
        case "SET_NEW_DATE": {
            let needToCreate = true
            state.forEach((mounth) => {
                mounth.forEach((day) => {
                    if(day.year === action.payload.year) {
                        needToCreate = false
                    }
                })
            })
           if(needToCreate) {
            return [...state, ...generateState(action.payload.year)]
           }else {
            return state
           }
        }
        default: return state
    }
}